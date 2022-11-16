import { Store, Unsubscribe } from "@reduxjs/toolkit";
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import App from "./app/App";
import { getStore, StaticRootState } from "./shared/config/store";
import { createStore } from "./shared/lib/createStore";
import { promises } from "./shared/lib/promises";

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

const renderHtml = (contents: string, store: Store) => `<!doctype html>
  <html lang="">
  <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet='utf-8' />
      <title>Welcome to Razzle</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
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

export const renderHandler = async (
  req: express.Request,
  res: express.Response
) => {
  const store = getStore();

  const app = (
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const renderApp = () => renderToString(app);

  renderApp();

  await Promise.allSettled(promises);
  res.send(renderHtml(renderApp(), store));
};

const server = express()
  .disable("x-powered-by")
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .get("/*", renderHandler);

export default server;
