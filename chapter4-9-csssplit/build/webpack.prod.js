const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//  使用了MiniCssExtractPlugin对css代码分离,需要在loader中做相关的配置 要将style-loader修改成MiniCssExtractPlugin.loader
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// 对css 进行压缩

const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css', // 将引入的css文件
      chunnkFilename: '[name].chunk.css',
    })
  ]
}

module.exports = merge(commonConfig, prodConfig)