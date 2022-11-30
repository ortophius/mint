/* eslint-disable react/jsx-no-constructed-context-values */
import { Store } from "@reduxjs/toolkit";
import express from "express";
import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import { routerV1 } from "./api/v1/router";
import App from "./app/App";
import { getStore } from "./shared/config/store";
import { ReducersContext } from "./shared/lib/hocs";
import { Effect, EffectsContext } from "./shared/lib/promises";

type AssetsUrls = Record<string, Record<string, string[]>>;

// eslint-disable-next-line import/no-dynamic-require, @typescript-eslint/no-var-requires
const assets: AssetsUrls = require(process.env.RAZZLE_ASSETS_MANIFEST);

const cssLinksFromAssets = (assetsUrls: AssetsUrls, entrypoint: string) => {
  if (!assetsUrls[entrypoint] || !assetsUrls[entrypoint].css) return "";
  return assetsUrls[entrypoint].css
    .map((asset) => `<link rel="stylesheet" href="${asset}">`)
    .join("");
};

const jsScriptTagsFromAssets = (
  assetsUrls: AssetsUrls,
  entrypoint: string,
  extra = ""
) => {
  if (!assetsUrls[entrypoint] || !assetsUrls[entrypoint].js) return "";
  return assetsUrls[entrypoint].js
    .map((asset) => `<script src="${asset}"${extra}></script>`)
    .join("");
};

const renderHtml = (contents: string, store: Store) => {
  const helmet = Helmet.renderStatic();
  return `<!doctype html>
  <html lang="">
  <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet='utf-8' />
      <title>Welcome to Razzle</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      ${helmet.style.toString()}
      ${cssLinksFromAssets(assets, "client")}
  </head>
  <body>
      <div id="root">${contents}</div>
      ${jsScriptTagsFromAssets(assets, "client", " defer crossorigin")}
      <script>
        window.__PRELOAD = ${JSON.stringify(store.getState())}
      </script>
  </body>
  </html>`;
};

export const renderHandler = async (
  req: express.Request,
  res: express.Response
) => {
  const store = getStore();
  const effects: Effect[] = [];

  const app = (
    <EffectsContext.Provider value={effects}>
      <ReducersContext.Provider value={[]}>
        <Provider store={store}>
          <StaticRouter location={req.url}>
            <App />
          </StaticRouter>
        </Provider>
      </ReducersContext.Provider>
    </EffectsContext.Provider>
  );

  const renderApp = () => renderToString(app);
  renderApp();
  const promises = effects.map((effect) => effect());
  await Promise.allSettled(promises);

  res.send(renderHtml(renderApp(), store));
};

const server = express()
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .use("/v1", routerV1)
  .get("/*", renderHandler);

export default server;
