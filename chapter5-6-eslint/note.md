项目中使用eslint
首先需要安装eslint
yarn add eslint -D
然后需要生产eslint的配置文件
通过npx eslint --init 生成

结合webpack时候还需要在webpack的配置的配置中添加eslint loader
需要安装yarn add eslint-loader
然后在.js文件的配置规则中加上eslint-loader,注意顺序,eslint-loader是最先执行的,所以应该把eslint-loader项放在最后

eslint在webpack中使用会影响打包速度,所以可以权衡整体,再决定是否选择使用或者使用其他的方案



