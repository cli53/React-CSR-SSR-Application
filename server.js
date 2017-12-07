import express from 'express';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import path from 'path';
import App from './src/App.jsx';
import reducer from './src/reducer.js';

const app = express();

app.use(express.static('dist'));

const serveStore = createStore(reducer);
const preloadedState = store.getState();

const handleRender = (req, res) => {
  console.log('url', req.url);
  const context = {}
//  Serving the index.html file parsed from the Root Component (App) by making it to a string
  const html = ReactDOMServer.renderToString(
  <Provider store={store}>
  <StaticRouter location= {req.url} context={context}>
  <App/>
  </StaticRouter>
  </Provider>
);

if(context.url) {
  console.log('hit')
  res.status = 302;
  res.redirect(context.url);
  res.end();

} else {
  //  read the index.html, replacing the div#root with a div#root with th content of the stringified Root Component
  fs.readFile('./public/index.html', {encoding: 'utf-8'}, function (err, data) {
    if(err) throw err;

    // Inserts the rendered React HTML into our main div
    const docu = data.replace(/<div id="root"><\/div>/, `<div id="root">${html}</div><script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}</script>`);
  // Sends the response back to the client
    res.write(docu)
    res.end()
      })
    };
};

app.get('*', handleRender);

app.listen(3001, () => {
  console.log('LISTENING ON PORT 3001')
});
