
const path = require('path');

module.exports = {
  entry: path.join(__dirname, '../HeliumServer.js'),
  target: 'node',
  output: {
    path: path.resolve(__dirname),
    filename: 'HeliumServer.prod.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react'],
        },
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
}