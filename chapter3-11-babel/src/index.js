import '@babel/polyfill'

import news from './news'

console.log('啊啊啊sss')
console.log('啊啊啊sss')

news()

const arr = [
  new Promise(() => {}),
  new Promise(() => {}),
]

arr.map(item => {
  console.log(item)
})

