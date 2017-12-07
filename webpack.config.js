const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'index.jsx')
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test:/\css$/,
      loader: ['style-loader!css-loader'],
      exclude: /node_modules/
    }
  ]
  }
}