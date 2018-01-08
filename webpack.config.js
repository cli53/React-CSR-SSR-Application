const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

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
      test:/\.css$/,
      loader: ['style-loader','css-loader', 'sass-loader'],
      exclude: /node_modules/
    }
  ]
  },
  devtool: 'source-map',
  plugins: [
    // new SWPrecacheWebpackPlugin(
    //   {
    //     cacheIde: 'my-app',
    //     filename: 'my-service-worker.js',
    //     minify: true,
    //     verbose: true,
    //   }
    // ),
    new UglifyJsPlugin({
      test: /\.jsx?$/,
      sourceMap: true,
    }),
    // new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ]
}