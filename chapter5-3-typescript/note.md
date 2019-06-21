讲到了我们要使用ts写我们的代码,需要做的配置
要在webpack配置文件中做loader配置
rules: [
  {
    test: /\.ts$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }
]

这里需要安装ts-loader 同事也需要安装typescript这个包

安装配置好了之后,我们打包会抱一个错误,即缺少tsconfig.json, 这是因为我们使用ts的时候必须要表明我们ts的某些使用规范,配置ts规则, 所以我们要去创建这个文件,简单配置如下
{
  "compilerOptions": {
    "outDir": "./dist",
    "module": "es6",
    "target": "es5",
    "allowJs": true
  }
}

同时我们还讲到了ts可以检测我们代码,但是当我们引入了一些外部的库的时候,是无法检测我们代码的,因为我们需要下载对应库的检测包
例如lodash检测我们需要安装@types/lodash 从而实现第三方库的检测
