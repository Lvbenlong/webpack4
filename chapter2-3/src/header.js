function Header() {
  var dom = document.getElementById('root')
  var sidebar = document.createElement('div')
  sidebar.innerHTML = 'header'
  dom.append(sidebar)
}

module.exports = Header