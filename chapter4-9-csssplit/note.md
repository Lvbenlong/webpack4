## MiniCssExtractPlugins 插件用于分割css
我们引入css的是谁是通过 import './css.css' 引入的, 之前讲treeShaking的时候, 我们对这种引入做了限定
如果想让某些文件不去执行tree shaking 则只用修改sideEffects的值,比如我们不想让css文件执行tree shaking 则需要这样设置
sideEffects: ["*.css"]

## Tree Shaking 回顾
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