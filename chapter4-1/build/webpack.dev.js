const merge = require('webpack-merge')
const webpack = require('webpack')
const commonConfig = require('./webpack.common')

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  optimization: {
    usedExports: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    open: true, // 自动打开浏览器
    port: 8080, // 端口号
    hot: true,
    hotOnly: true,
  }
}

module.exports = merge(commonConfig, devConfig)