import express from 'express';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import path from 'path';
import App from './src/App.jsx';

const app = express();

app.use(express.static('dist'));

const handleRender = (req, res) => {
  console.log('url', req.url);
  const context = {}
//  Serving the index.html file parsed from the Root Component (App) by making it to a string
  const html = ReactDOMServer.renderToString(
  <StaticRouter location= {req.url} context={context}>
  <App/>
  </StaticRouter>
);

if(context.url) {
  console.log('hit')
  res.status = 302;
  res.redirect(context.url);
  res.end();

} else {
  //  read the index.html, replacing the div#root with a div#root with th content of the stringified Root Component
  fs.readFile('./static/index.html', {encoding: 'utf-8'}, function (err, data) {
    if(err) throw err;

    // Inserts the rendered React HTML into our main div
    const docu = data.replace(/<div id="root"><\/div>/, `<div id="root">${html}</div>`);
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
