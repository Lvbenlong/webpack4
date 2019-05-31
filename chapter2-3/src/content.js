function Content() {
  var dom = document.getElementById('root')
  var sidebar = document.createElement('div')
  sidebar.innerHTML = 'Content'
  dom.append(sidebar)
}

module.exports = Content