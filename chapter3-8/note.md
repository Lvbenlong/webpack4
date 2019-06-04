##提高打包效率:
  1. "watch": "webpack --watch", 
      当我们开发的时候,文件发生变化的时候,他会自动帮我们去打包打包,但是他不能启动一个本地服务器,还是通过本地文件去打开的,同时也不能自动刷新
  2. "start": "webpack-dev-server",
      首先要在webpack.config.js 中加入一些DevServer的配置,然后执行打包,他会帮我们启动一个服务,并且当我们src目录下的文件发生变化的时候,会自动打包并且浏览器会自动刷新, 最推荐的用法
  3. "server": "node server.js"
      自己手写的一个dev--server服务 在sevser.js中手写我们的服务 在node中使用webpack

##HMR (Hot Module Replacement) 模块热加载
  1. 在devServer中配置模块热加载 hot和hotOnly选项
  2. 在plugins里面配置webpack.HotModuleReplacementPlugin() 插件
  3. 有时候需要需要我们自己去写相关的hmr逻辑,才能实现效果. 为什么有些框架vue和react或者css不需要写的原因是因为css-loader vue-loader 或者 babel-presets里面已经内置实现了