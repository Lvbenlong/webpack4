通常情况下,当我们服务器挂掉的时候,用户再访问我们的网站基本上就是无法打开的,但是可以借助pwa技术,即使在用户没有网络或者网站服务故障的时候,也可以正常访问

我们借助http-server来启动我们的本地服务 http-server dist -p 8081 表示服务启动是在dist文件夹下,监听的端口是8081 如果不加文件名称表示在当前目录下启动我们的服务

如果想要在webpack中配置PWA,我们首先要先安装一个插件workbox-webpack-plugin,这个插件是有Google提供的, ps 这个插件是在生产环境配置的,我们做开发的过程中没有必要去做pwa的配置
然后在webpack线上环境的配置文件中去使用这个插件并进行相关的配置项
const WorkboxPlugin = require('workbox-webpack-plugin')

new WorkboxPlugin.GenerateSW({
  clientsClaim: true,
  skipWaiting: true
})

配置完成后我们先打包,发现dist的目录下多了service-worker.js这个文件,这就是我们项目支持pwa应用的主要文件,可以理解成另类的缓存

然后在业务逻辑代码中做相关的判断操作,即可
