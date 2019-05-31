function Sidebar() {
  var dom = document.getElementById('root')
  var sidebar = document.createElement('div')
  sidebar.innerHTML = 'sideBar'
  dom.append(sidebar)
}

module.exports = Sidebar