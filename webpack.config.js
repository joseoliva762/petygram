const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
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
    }),
    new WebpackPwaManifestPlugin({
      filename: 'manifest.json',
      name: 'Petygram tu app de mascotas',
      short_name: 'Petygram',
      description: 'Conoce todas las mascotas de tu zona',
      background_color: '#fff',
      theme_color: '#fff',
      start_url: '/',
      scope: '/',
      display: 'standalone',
      orientation: 'portrait',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 144, 192, 256, 384, 512],
          // destination: path.join('static/icons'),
          purpose: 'maskable any'
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      swDest: 'service-worker.js',
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 5000000,
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://(.*)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          }
        },
        {
          urlPattern: new RegExp('https://petygram-server.vercel.app'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
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
