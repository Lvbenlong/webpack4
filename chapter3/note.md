###loade的使用

#file-loader vs url-loader
url-loader 会将图片最终以base64的形式转换出去,写在打包的js代码中去.
好处: 减少http请求
坏处: 有些图片过大,导致js包过大,影响加载速度
所以可以设置一个限制,当图片超过指定大小的时候,我们不采取这种方式,依旧是将其打包成图片的形式输出

file-loader:
{
  test: /\.(jpg|png|gif)$/,
  use: {
    loader: 'file-loader',
    options: {
      name: '[name]_[hash].[ext]', // 设置打包出去文件的名称
      outputPath: 'images/', // 设置打包出去文件的存放目录
    }
  }
}

url-loader:
{
  test: /\.(jpg|png|gif)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name]_[hash].[ext]', // 设置打包出去文件的名称
      outputPath: 'images/', // 设置打包出去文件的存放目录
      limit: 2048, // 设置文件超过这个大小会将其不以base64的形式转出
    }
  }
}

详细看 file-loader和url-loader 的文章
