/* eslint-disable import/no-extraneous-dependencies */
// node
const path = require('path')
// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { ProgressPlugin } = require('webpack')

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
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: 'Fake - Instagram',
      template: path.resolve(__dirname, '..', 'src', 'public', 'template.html'),
      filename: 'index.html',
      alwaysWriteToDisk: true,
    }),
    new HtmlWebpackHarddiskPlugin(),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, '..', 'src', 'public', 'favicon') },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            env: {
              production: {
                plugins: ['transform-react-remove-prop-types'],
              },
            },
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: '3',
                },
              ],
              '@babel/preset-react',
            ],
            plugins: ['babel-plugin-styled-components'],
          },
        },
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
    alias: {
      Context: path.resolve(__dirname, '..', 'src', 'context'),
      Hooks: path.resolve(__dirname, '..', 'src', 'hooks'),
    },
    extensions: ['*', '.js', '.jsx'],
  },
}
