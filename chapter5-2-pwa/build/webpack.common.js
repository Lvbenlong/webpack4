const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const prodConfig = require('./webpack.prod')
const devConfig = require('./webpack.dev')
const merge = require('webpack-merge')


const commonConfig = {
  entry: {
    main: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(),
  ],
  // 代码分割配置
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',  
      minSize: 30000, 
      maxSize: 0,  
      minChunks: 1, 
      maxAsyncRequests: 5, 
      maxInitialRequests: 3, 
      automaticNameDelimiter: '-', 
      name: true,
      cacheGroups: {
        // 缓存组
        vendors: {
          test: /[\\/]node_modules[\\/]/, 
          priority: -10,
          name: 'vendors' 
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true 
        }
      }
    }
  },
  performance: false,
  // 多入口文件的输入配置,
  output: {
    // filename: '[name].js', // 这里的name就对应着entry对象里面的键名
    // chunkFilename: '[name].chunk.js', // 与filename 不同,他代表入口文件中,引入的第三方文件的命名方式
    path: path.resolve(__dirname, '../dist'), // 设置打包输出的路径是在根目录下, 而不是在当前目录下
  },
}

module.exports = (env) => {
  // 根据传入的环境变量来判断是开发环境还是生产环境
  if (env && env.production) {
    return merge(commonConfig, prodConfig)
  } else {
    return merge(commonConfig, devConfig)
  }
}