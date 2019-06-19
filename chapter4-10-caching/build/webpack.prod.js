const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')


const prodConfig = {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  optimization: {
    // 老版本的webpack contenthash 变化设置
    runtimeChunk: {
      name: 'runtime'
    },
    minimizer: [
    ]
  },
  module: {
    rules: [
    ]
  },
  plugins: [
  ],
  output: {
    filename: '[name].[contenthash].js', // 这里的name就对应着entry对象里面的键名
    chunkFilename: '[name].[contenthash].js', // 与filename 不同,他代表入口文件中,引入的第三方文件的命名方式
  }
  // webpack 解决缓存问题 根据contenthash值来设置 只有当内容改变的时候, contenthash才会改变 即当我们改变业务逻辑代码的时候,最终打包后只有业务逻辑代码的文件才会修改,而库文件的文件没有更改,所以文件名也就不会变化
  // 那么当用户再次刷新页面的时候,并不会对库文件再次引用,而是直接使用缓存的文件,只用对业务逻辑代码的文件进行更新引用,从而加快访问速度
  // 老版本的webpack有时候会出现即使文件没有修改,但是contenthash依旧变化的情况,这里需要再optimization中设置runtimeChunk
}

module.exports = merge(commonConfig, prodConfig)