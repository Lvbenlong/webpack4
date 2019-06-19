// 同步方式引入 不会进行懒加载 start
import _ from 'lodash'

function getComponent() {
  var ele = document.createElement('div')
  ele.innerHTML = _.join(['ben', 'lv'], '-')
  return ele

}

document.addEventListener('click', () => {
  document.body.appendChild(getComponent())
})

// 同步方式引入 不会进行懒加载 start


// 异步方式引入 不会进行懒加载 start
// function getComponent() {
//   return import(/* webpackChunkName: "lodash" */'lodash').then(({default: _}) => {
//     var ele = document.createElement('div')
//     ele.innerHTML = _.join(['ben', 'lv'], '-')
//     return ele
//   })
// }
// document.addEventListener('click', () => {
//   getComponent().then(ele => {
//     document.body.appendChild(ele)
//   })
// })
// 异步方式引入 会进行懒加载 end

