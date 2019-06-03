import img from './1.jpg'
import './index.scss' 



var image = new Image()
image.src = img
image.classList.add('avatar')

var root = document.getElementById('root')

root.append(image)

