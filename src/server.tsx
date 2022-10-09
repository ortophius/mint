import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './app/App';

type AssetsUrls = Record<string, Record<string, string[]>>;

// eslint-disable-next-line import/no-dynamic-require
const assets: AssetsUrls = require(process.env.RAZZLE_ASSETS_MANIFEST);

const cssLinksFromAssets = (assetsUrls: AssetsUrls, entrypoint: string) => {
  if (!assetsUrls[entrypoint] || !assetsUrls[entrypoint].css) return '';
  return assetsUrls[entrypoint].css.map((asset) => `<link rel="stylesheet" href="${asset}">`).join('');
};

const jsScriptTagsFromAssets = (assetsUrls: AssetsUrls, entrypoint: string, extra = '') => {
  if (!assetsUrls[entrypoint] || !assetsUrls[entrypoint].js) return '';
  return assetsUrls[entrypoint].js.map((asset) => `<script src="${asset}"${extra}></script>`).join('');
};

export const renderApp = (req: express.Request) => {
  const markup = renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>,
  );

  const html = `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${cssLinksFromAssets(assets, 'client')}
    </head>
    <body>
        <div id="root">${markup}</div>
        ${jsScriptTagsFromAssets(assets, 'client', ' defer crossorigin')}
    </body>
  </html>`;

  return { html, redirect: null };
};

const server = express()
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .get('/*', (req: express.Request, res: express.Response) => {
    const { html = '', redirect = false } = renderApp(req);
    if (redirect) {
      res.redirect(redirect);
    } else {
      res.send(html);
    }
  });

export default server;
