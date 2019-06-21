主要讲解了webpackdevserver的相关配置
devServer: {
  proxy: {
    // 在这里进行相关的配置
    // 链接: https://webpack.docschina.org/configuration/dev-server/#devserver-proxy
  }
}

还讲到了当使用SPA做页面跳转的时候需要再devServer里面做一层配置,保证我们的路由不会出问题
devServer: {
  historyApiFallback: true
}

以上讲到的都是针对开发环境,不是线上环境, 在配置SPA的时候,开发环境ok但是当放到服务器上的时候会出问题,是因为我们还需要让后端的同事在nginx或者Apache在做相关的配置

