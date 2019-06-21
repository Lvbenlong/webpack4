提高webpack打包速度的方法:
第一步: 更新最新版本的webpack node npm yarn
第二步, 减少loader的转换,我们在配置webpack的时候,会使用到各种loader,减少不必要的loader可以提升我们的打包速度, 合理的使用exclude 和 include 能够大幅度提高打包速度
第三步: 尽可能少的使用plugin, 同时确保plugin的可靠性 (例如我们使用代码压缩打包, 我们开发环境就没必要压缩,只有在生产环境才会压缩,所以就不用设置开发环境压缩) 尽量选择官方推荐的插件

第四步: 合理的优化resolve配置项让webpack打包速度变得更快
