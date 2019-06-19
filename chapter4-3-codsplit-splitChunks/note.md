## Code Spliting 代码分割
当我们写业务代码的时候,有时候还会用到第三方库,比如lodash,这时候我们使用webpack打包的时候,就会将第三方库也打包进来,从而会造成打包出的文件过大,当我们修改业务代码后,在执行打包,又将这些第三方库打包然后更新,造成用户流量的不必要浪费
所以我们需要对代码进行拆分
ps: 代码分割 和 webpack 是没有关系的
webpack中实现代码分割的两种方式
1. 同步代码 (就是从上往下import) 只需在webpack的配置中加入optimization配置项
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
2. 异步代码 (像这种形式: import('lodash').then()..这种形式的) 无需做任何配置 会自动进行代码分割 
  这里需要注意的是,使用这种方式打包可能会报错,此时需要安装一个babel插件 babel-plugin-dynamic-import-webpack 然后在.babelrc中添加一项设置即可 "plugins": ["dynamic-import-webpack"] 添加此条设置

虽然异步代码分割无需在webpack中加入配置项,但是有时候为了打包出来的文件按照自己预想,有时候也需要配置

无论是同步代码的分割还是异步代码的分割,都会用到split-chunks-plugin这个插件, 这个插件的配置项很多,解释如下
当我们在设置splitChunks为一个空对象的时候,其实就是将里面具体的配置项设置了默认的配置
即: splitChunks: {}
等同于: splitChunks: {
        chunks: 'async',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
 具体每项的说明在webpack中有注释说明


webpack底层的代码分割使用的是SplitChunksPlugin插件
