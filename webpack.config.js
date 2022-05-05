const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const jsConfig = require('./jsconfig.json');
const { getWebpackAlias } = require('./getWebPackAlias');


const alias = getWebpackAlias(jsConfig);

module.exports = {
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    alias,
    extensions: ['', '.js', '.jsx']
  }
};
