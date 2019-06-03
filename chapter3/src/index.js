import img from './1.jpg'
// import './index.css'
// import style from './index.scss' // 模块化css引入
import './index.scss' 
import createAvatar from './createAvatar'

createAvatar()

var image = new Image()
image.src = img
// image.classList.add(style.avatar) //模块化css引入的写法
image.classList.add('avatar')

var root = document.getElementById('root')
var font = document.getElementById('font')

font.innerHTML = '<span class="iconfont   iconrectangle390"></span>'

root.append(image)

