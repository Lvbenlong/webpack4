## Tree Shaking
当我引入一个模块的时候, 我并没有引入这个模块所有的代码,而是之引入我所需要的代码,此时需要借助webpack的tree shaking的功能帮助我们实现
只支持es module的模块引入 不支持common js的模块引入
配置tree shaking很简单 在webpack.config.js中, 如果mode=production 则不需要添加额外的配置项 如果mode=development 则需要加入一箱配置
optimization: {
  usedExports: true
}
同时也需要再package.json中加入配置:
sideEffects: false
如果想让某些文件不去执行tree shaking 则只用修改sideEffects的值,比如我们不想让css文件执行tree shaking 则需要这样设置
sideEffects: ["*.css"]

## development 和 production 
mode的值为这两个表示线上环境和开发环境
开发环境是为了方便我们自己开发差错 开发环境下借助的是webpack-dev-server来实现开发环境的本地服务配置
线上环境则需要为了代码体积最小加快速度

这两个的环境的配置是不同的,所以我们应该最好将其分开进行写配置,因此有了webpack.dev.js 和 webpack.prod.js 这两个webpack的配置文件
此时我们发现,这两个文件中有大量的相似代码,我们可以将其抽离出来,作为公共使用的配置文件 即webpack.common.js
最终我们需要借助一个工具webpack-merge将webpack.common.js和dev|prod.js连接起来