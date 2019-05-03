const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    port: 9000,
  },
});
