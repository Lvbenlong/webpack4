const merge = require('webpack-merge')
const webpack = require('webpack')
const commonConfig = require('./webpack.common')

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2, // 当样式文件中有引入其他样式文件(@import方式引入),可能会不走下面的loader(sass-loader, postcss-loader),为了解决此问题从而加入此配置项,对应的值就是此loader后未执行的loader数目
              // modules: true, // css 模块化 解决的问题: 引入的样式文件可能会对全局造成污染,使用模块化引入样式文件,避免问题出现
            }
          },
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('autoprefixer')(),
              ]
            }
          }
        ],
      },
    ]
  },
  optimization: {
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].js', // 这里的name就对应着entry对象里面的键名
    chunkFilename: '[name].js', // 与filename 不同,他代表入口文件中,引入的第三方文件的命名方式
  },
  devServer: {
    contentBase: './dist',
    open: true, // 自动打开浏览器
    port: 8080, // 端口号
    hot: true,
    hotOnly: true,
  }
}

module.exports = merge(commonConfig, devConfig)