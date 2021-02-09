// node
const path = require('path');
// webpack
const { merge } = require('webpack-merge');
const webpackCfgCommon = require('./webpack.config');

module.exports = () =>
  merge(webpackCfgCommon, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, '..', 'dist'),
      historyApiFallback: true,
      hot: true,
      port: 4000,
      proxy: {
        '/api': 'http://localhost:4001',
      },
      publicPath: '/assets/',
    },

    module: {
      rules: [
        {
          test: /\.(css|scss)$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        },
      ],
    },
  });
