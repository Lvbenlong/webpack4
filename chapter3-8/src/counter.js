function counter() {
  var number = document.createElement('p')
  number.setAttribute('id', 'counter')
  number.innerHTML = 1;
  document.body.appendChild(number)
  number.onclick = function () {
    number.innerHTML = parseInt(number.innerHTML, 10) + 1
  }
}

export default counter;