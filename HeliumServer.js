
import App from './src/index.jsx';
import reducer from './src/reducer.js';
const express = require('express');
const helium = require('helium.js');
const PORT = process.env.PORT || 3333;
const app = express();


app.use(express.static('dist'));

helium.init({
  html: './public/index.html',
  id: 'root',
  App,
  reducer,
});

app.get('*', helium.serveRedux);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
