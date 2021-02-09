// node
const path = require('path');
// plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// webpack
const { merge } = require('webpack-merge');
const webpackCfgCommon = require('./webpack.config');

module.exports = () => {
  return merge(webpackCfgCommon, {
    mode: 'production',
    devtool: 'source-map',
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'js/[name].[contenthash].bundle.js',
      publicPath: '/assets/',
    },
    module: {
      rules: [
        {
          test: /\.(css|scss)$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
      ],
    },
    optimization: {
      runtimeChunk: {
        name: 'runtime',
      },
      moduleIds: 'deterministic',
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles/[name].[contenthash].css',
      }),
    ],
  });
};
