const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: {
    path: __dirname,
    filename: path.join('dist','bundle.js')
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test:/\css$/,
      loader: ['css-loader', 'style-loader'],
      exclude: /node_modules/
    }
  ]
  }
}