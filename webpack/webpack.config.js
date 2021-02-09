// node
const path = require('path');
// plugins
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const { ProgressPlugin } = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, '..', 'src', 'index'),
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'js/[name].bundle.js',
    assetModuleFilename: 'images/[hash][ext][query]',
    publicPath: '/assets/',
  },
  plugins: [
    // html-webpack-plugin throws a warning DEP_WEBPACK_COMPILATION_ASSETS
    // See this issue https://github.com/jantimon/html-webpack-plugin/issues/1523
    // new CleanWebpackPlugin(),
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack Boilerplate for React',
      favicon: path.resolve(__dirname, '..', 'src', 'images', 'favicon.png'),
      template: path.resolve(__dirname, '..', 'src', 'template.html'),
      filename: 'index.html',
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackHarddiskPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        type: 'asset/inline',
      },
    ],
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};
