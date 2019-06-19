// 同步代码示例开始
// import _ from 'lodash'

// console.log(_.join(['a', 'b', 'c'], '+++'))
// console.log(_.join(['a', 'b', 'c'], '|||'))

// 同步代码示例结束

// 异步代码示例开始

function getComponent() {
  // 使用这种方式(异步引入)引入的lodash webpack会自动将lodash这个包分离出去, 但是最终打包出去在dist中的文件名是0.js 为了让打包出去的名字可读性更强,我们这里还需要借助魔法注释来修改
  // 魔法注释的写法  /* webpackChunkName: "lodash" */ 打包后的名字叫做 vendors~lodash 如果想要文件名字就是lodash.js 那么我们还需要在webpack的配置文件中添加一项修改, 如下:
  // 在optimization下的splitChunks 加入以下代码: cacheGroups: { vendors: false, default: false }
  return import(/* webpackChunkName: "lodash" */'lodash').then(({default: _}) => {
    var ele = document.createElement('div')
    ele.innerHTML = _.join(['ben', 'lv'], '-')
    return ele
  })
}

getComponent().then(ele => {
  document.body.appendChild(ele)
})
