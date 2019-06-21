我们之前写的都是业务逻辑的代码.
但是现在当我们想要写一个第三方的公共库文件的时候,然后打包出去工他人使用,我们需要借助webpack怎么帮我们呢?
当我们写好库文件之后,在webpack的配置文件的output下,增加配置:
library: 'value', // 配置库打包时候使用
libraryTarget: 'value' 
增加以上两项, 
libraryTarget标明我们的库可以用个 import , require, 的形式引入(即可以使用es6模块引入 和 amd cmd的形式引入), 此时只用把值设置成umd即可, 即 libraryTarget: 'umd' 
libraryTarget的值还可以是 this window global 分别表示把我们的库文件注入到某种环境下的全局变量中去, 但是基本上用umd就ok
library表明我们还可以直接在页面中通过script标签的形式引入, 如library: '$',那么我们通过$就可以调用库中的方法了 $.add $.join


当我们自己写的库文件需要引入第三方库的时候,最后我们打包我们的库文件的时候,会发现会将第三方库也打包进去,会造成体积变得很大,并且也是没必要的,因此我们可以增加一下配置,减少这种不必要的打包操作, 配置入下
在webpack的配置文件中加入
externals: ['lodash'],
或者用下面这种方式配置
externals: {
  lodash: {
    root: 'lodash', // 表示通过script标签引入的方式,那么必须是用lodash作为全局变量不能是其他的
    commonjs: 'lodash', // 表示通过commonjs方式引入lodash的时候,名字必须是lodash而不能是其他的 比如 const lodash = require('lodash') 而不能是这样的 const _ = require('lodash') 错误的
  }
},
表示如果我们用到了第三方库lodash在打包的时候不会将lodash打包到我们自己的库中