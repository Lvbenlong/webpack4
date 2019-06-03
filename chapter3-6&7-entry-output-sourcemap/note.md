查阅文档 document -- configaration --- output outputmanagement 

source-map: 是源代码和打包后目标代码的映射, 解决的问题是当我们在开发过程中,遇到错误的时候,提示报错信息的可读性 

source-map的配置项各个值的含义:
cheap: 提示我多少行出错了,不会具体到哪一列,减少打包的时间, 只负责业务代码的错误不负责loader module里面的错误
inline: 打包后不会有.map映射文件,而是将它放在了打包后的文件中去
module: 如果loader和module里面也有错误,会将其显示出来
eval: 配合source-map对代码的打包, 提高打包速度

devtool默认值是'source-map',打包后会多出一个.map的映射文件,代表源代码和打包后目标代码的映射关系

开发环境下devtool配置:cheap-module-eval-source-map
线上环境下devtool配置: cheap-module-source-map
