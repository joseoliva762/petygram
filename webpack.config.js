const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const jsConfig = require('./jsconfig.json');

function getWebpackAlias(jsConfig) {
  const base = jsConfig.compilerOptions.baseUrl;
  const paths = jsConfig.compilerOptions.paths;

  return base && paths
    ? Object.keys(paths).reduce((currentAlias, pathKey) => {
      const [aliasKey] = pathKey.split('/');
      const [pathToConfig] = paths[pathKey];
      const [relativePath] = pathToConfig.split('/*');
      const absolutePath = path.join(__dirname, base, relativePath);
      return {
        ...currentAlias,
        [aliasKey]: absolutePath
      };
    }, {}) || {}
    : {};
}

const alias = getWebpackAlias(jsConfig);

module.exports = {
  output: {
    filename: 'app.bundle.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
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
