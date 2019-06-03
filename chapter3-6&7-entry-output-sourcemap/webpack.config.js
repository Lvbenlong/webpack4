const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports = {
  mode: 'development',
  // 多入口文件的输入配置,
  devtool: 'cheap-module-eval-source-map', // 建议mode='development'时这么设置
  devtool: 'cheap-module-source-map',// 建议mode='peoduction'时这么设置
  devtool: 'inline-source-map',
  entry: {
    main: './src/index.js',
    // sub: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]', // 设置打包出去文件的名称
            outputPath: 'images/', // 设置打包出去文件的存放目录
            limit: 2048, // 设置文件超过这个大小会将其不以base64的形式转出
          }
        }
      },
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
  plugins: [
    new htmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  // 多入口文件的输入配置,
  output: {
    // publicPath: 'http://cdn.com.cn', // publicPath 设置输出资源的前置链接,当项目上线后,如果资源设置在cdn上,可以采用此操作
    filename: '[name].js', // 这里的name就对应着entry对象里面的键名
    path: path.resolve(__dirname, 'dist')
  }
}