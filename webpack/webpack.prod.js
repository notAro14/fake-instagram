/* eslint-disable import/no-extraneous-dependencies */
// node
const path = require('path')
// plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
// webpack
const { merge } = require('webpack-merge')
const webpackCfgCommon = require('./webpack.config')

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
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },
    optimization: {
      minimizer: [new CssMinimizerPlugin()],
      runtimeChunk: {
        name: 'runtime',
      },
      moduleIds: 'deterministic',
      splitChunks: {
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'initial',
            reuseExistingChunk: true,
          },
        },
      },
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles/[name].[contenthash].css',
      }),
    ],
  })
}
