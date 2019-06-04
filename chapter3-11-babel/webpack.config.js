const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map', // 建议mode='development'时这么设置
  entry: {
    main: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          "presets": [["@babel/preset-env", {
            useBuiltIns: 'usage'
          }]]
        }
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  // 多入口文件的输入配置,
  output: {
    filename: '[name].js', // 这里的name就对应着entry对象里面的键名
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist',
    open: true, // 自动打开浏览器
    port: 8080, // 端口号
    hot: true,
    hotOnly: true,
  }
}