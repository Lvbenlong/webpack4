function number() {
  var number = document.createElement('p')
  number.setAttribute('id', 'number')
  number.innerHTML = 2000;
  document.body.appendChild(number)
}

export default number;