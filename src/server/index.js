import express from 'express';
import proxy from 'express-http-proxy';
import { renderToString } from 'react-dom/server';
import { matchRoutes } from 'react-router-config';
import { render } from './utils';
import routes from '../Routes';
import { getStore } from '../store';

const app = express();

app.use(express.static('public'));
app.use(
  '/api',
  proxy('http://47.95.113.63', {
    proxyReqPathResolver: function (req) {
      return '/ssr/api' + req.url;
    },
  })
);

app.get('*', function (req, res) {
  const store = getStore(req);

  const matchedRoutes = matchRoutes(routes, req.path);

  const promises = [];

  matchedRoutes.forEach((it) => {
    if (it.route.loadData) {
      const promise = new Promise((resolve, reject) => {
        it.route.loadData(store).then(resolve).catch(resolve); // ???
      });
      promises.push(promise);
    }
  });

  Promise.all(promises).then(() => {
    const context = { css: [] };
    const html = render(store, routes, req, context);
    if (context.action === 'REPLACE') {
      res.redirect(301, context.url);
    } else if (context.NotFound) {
      res.status(404);
      res.send(html);
    } else {
      res.send(html);
    }
  });
});

app.listen(3000);
