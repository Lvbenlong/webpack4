## webpack 中的 shiping(垫片)
当我们引入一个库的时候,发现这个库中还需要其他的模块, 可是我们又不能去修改库的源文件,这时候我们就需要借助shiping 例如demo中jquery.ui.js 中用到了$ 但是页面并没有引入jQuery 那么运行的时候肯定会报错
因此这个时候我们就需要借助shiping
如何设置: 需要借助webpack的一个插件 webpack.ProvidePlugin({ $: 'jquery' }) 这样就可以使用不会报错了

## 如何在webpack打包的过程中使用全局变量
我们之前打包的时候,分别为开发环境和生成环境设置了专门的webpack.config.js文件,用于区分, 即:
"bundle": "webpack --config ./build/webpack.dev.js",
"dev": "webpack-dev-server --config ./build/webpack.dev.js",
"build": "webpack --config ./build/webpack.prod.js"
当运行不同的命令的时候,其实执行的就是不同的配置文件的配置

现在还有一种方式同样可以实现这种操作, 利用的是webpack中的全局环境变量
我们将对webpack.dev.js webpack.prod.js webpack.common.js 进行改造

修改好webpack配置文件后,需要对执行打包的命令进行修改, 即需要加入对应的环境变量
    "bundle": "webpack --config ./build/webpack.common.js",
    "dev": "webpack-dev-server --config ./build/webpack.common.js",
    "build": "webpack --env.production --config ./build/webpack.common.js"  // --env.production 这里就是设置了production这个变量, --env.production=abc 表示设置production的值为abc


