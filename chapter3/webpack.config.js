const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
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
      {
        test: /\.(eot|woff|ttf|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]_[hash].[ext]', // 设置打包出去文件的名称
            outputPath: 'font/', // 设置打包出去文件的存放目录
          }
        }
      },
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}