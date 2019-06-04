import './index.scss' 
import number from './number'
import counter from './counter'


console.log('啊啊啊')
counter()
number()

var btn = document.createElement('button')
btn.innerHTML = '新增'

document.body.appendChild(btn)

btn.onclick = function() {
  var div = document.createElement('div')
  div.innerHTML = 'item'
  document.body.appendChild(div)
}

if (module.hot) {
  module.hot.accept('./number', () => {
    document.body.removeChild(document.getElementById('number'))
    number()
  })
}

