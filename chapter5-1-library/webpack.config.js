const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  externals: ['lodash'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'library.js',
    library: 'library', // 配置库打包时候使用
    libraryTarget: 'umd' // 配置库打包时候使用 umd this window global
  }
}