webpack的默认配置文件的名称是webpack.config.js
如果想要更改该默认文件名称,执行以下操作: npx webpack --config webpackvonfig.js  (那么webpack就会识别新的配置文件是webpackconfig.js而不是webpack.config.js)

webpack默认会有一套自己的打包配置方式,我们想要自己打包的话要创建自己的配置文件,webpack.config.js

1. 什么是webpack
    webpack是一个模块打包器. 将我们项目中的JavaScript代码或者一些浏览器不能直接运行的代码(Scss,Typescript...),将其打包成浏览器可执行的代码供其使用

2. webpack核心概念
    1. Entry 入口 webpack执行打包构建的第一步,在entry中配置项目的入口文件配置
    2. Module 模块 webpack中是以模块划分的, 一个模块对应着一种文件形式. 
    3. Chunk：代码块，一个 Chunk 由多个模块组合而成，用于代码合并与分割。
    4. Loader：模块转换器，用于把模块原内容按照需求转换成新内容。
    5. Plugin：扩展插件，在 Webpack 构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要的事情。
    6. Output：输出结果，在 Webpack 经过一系列处理并得出最终想要的代码后输出结果。

3. webpack执行流程
    webpack启动后会在entry里配置的module开始递归解析entry所依赖的所有module，没找到一个module, 就会根据配置的loader去找相应的转换规则，对module进行转换后在解析当前module所依赖的module，这些模块会以entry为分组，一个entry和所有相依赖的module也就是一个chunk，最后webpack会把所有chunk转换成文件输出，在整个流程中webpack会在恰当的时机执行plugin的逻辑

4. 配置webpack
    1. 初始化项目
      