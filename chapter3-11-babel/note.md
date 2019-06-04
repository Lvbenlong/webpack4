##webpack编译es6代码
  1. 需要借助babel-loader @babel/core @babel/preset-env @babel/polyfill  install这四个
        bable-loader是帮助webpack做打包使用的loader工具
        @babel/core 是babel的核心库, 让babel识别js代码里面的内容,然后把js代码转换成抽象语法树, 然后编译转成新的语法出来
        @babel/preset-env 将es6de语法翻译成es5的语法
        @babel/polyfill的作用: babel翻译后的代码,有些es6写法他并没有完全兼容到低版本的浏览器中,所以需要借助它来实现, 然后在页面的入口文件 加入 import '@babel/polyfill' 即可实现编译出代码兼容低版本浏览器
  2. 在webpack中配置, 新增一个配置规则 
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      options: {
        "presets": ["@babel/preset-env"]
      }
  3. 通过上面的方式打包后的js会发现很大,是因为他将我们没有用到的es6的语法也全部翻译了,为了避免这样,我们对此做简单的配置,即可打包出必要的代码,减小体积
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
            "presets": [["@babel/preset-env", {
                useBuiltIns: 'usage'
            }]]
        }
        

