const express = require('express');
const path = require('path');
const app = express();


app.use(express.static('dist'));

app.get('*', function (req, res) {
  console.log('hi')
  res.sendFile(path.join(__dirname,'/static/index.html'));
  // res.sendFile(path.join(__dirname, './static/index.html'));
});

app.listen(3002, () => {
  console.log('LISTENING ON PORT 3002')
});