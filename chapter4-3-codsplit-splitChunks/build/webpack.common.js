const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin(),
    // CleanWebpackPlugin 可以接受两个参数,第一个是数组,要删除的文件的文件名 第二个参数是一个对象,配置一些相关信息
    // new CleanWebpackPlugin(['dist'], {
    //   root: path.resolve(__dirname, '../'), // 设置项目的根路径 (CleanWebpackPlugin默认是将当前文件所在的路径作为根路径,而不能删除外层的文件, 所以我们需要通过这部操作设置我们的根路径, 然后要删除的文件夹也就是根路径的文件夹)
    // }),
  ],
  // 代码分割配置
  optimization: {
    splitChunks: {
      // 代码分割具体的流程, 首先判断这个库是同步引入还是异步引入, 是否符合chunks的值, 如果是同步代码后会去cacheGroups中进行下一步操作, 在cacheGroups中,如果这个js库的目录是在node_modules文件夹下,那么他将被打包在vendors组中,
      chunks: 'all',  // chunks 可选值: async initial all async表示只对异步代码进行分割 initial表示只对同步代码进行分割 all表示只对所有模块代码进行分割
      minSize: 30000, // 表示文件超过(30000/1000)kb的时候,才做代码分割,小于这个大小的话不做代码分割
      maxSize: 0,  // 设置代码分割超过某个大小的时候,再对其进行二次拆分 maxSize: 50000, 如果lodash的大小为1mb 那么1mb是大于50000byte的,所以会对lodash进行二次拆分,但是实际上这是没有意义的,所以我们在这里设置为0即可
      minChunks: 1, // minChunks 指的是, (假设minChunks: 2)当我们打包后生成的chunk文件中, 有超过2个chunk文件用上了某个库,那么我们才对他进行代码分割
      // 这里需要对chunk进行理解 chunk指的是打包生成后的js文件 一个文件代表一个chunk
      maxAsyncRequests: 5, //  表示最多分割的文件数为5, 如果超过了5个,我们将不会再对他进行代码分割,如果分割太多的话, 就会造成请求过多, 这里按照默认设置为5即可
      maxInitialRequests: 3, // 表示入口文件进行加载的时候, 入口文件会引入其他的文件, 如果入口文件做代码分割,那么最多只能分割出3个文件,如果超过了3个,我们将不会再对他进行代码分割,分割过多同样也会造成请求过多的问题
      automaticNameDelimiter: '~', // 文件生成的时候, 中间的连接符好 例如 vendors~lodash.js
      name: true,
      cacheGroups: {
        // 缓存组
        vendors: {
          test: /[\\/]node_modules[\\/]/, // 放在这个组里面的文件要满足的条件,即必须是在node_modules文件夹下才满足
          priority: -10, // 当我们打包同步代码的时候,比如lodash 其实它既满足vendors组的要求,同时也满足default组的要求,那么具体放在哪个组里呢,就是看priority这个值,值越大则优先级越高
          filename: 'vendors.js' // node_modules文件下最终打包生成的文件名称是vendors.js
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true // 如果一个模块已经被打包过了,那么我们再打包的时候就忽略这个模块 直接用已经打包后的模块
        }
      }
    }
  },
  // 多入口文件的输入配置,
  output: {
    filename: '[name].js', // 这里的name就对应着entry对象里面的键名
    path: path.resolve(__dirname, '../dist'), // 设置打包输出的路径是在根目录下, 而不是在当前目录下
  },
}