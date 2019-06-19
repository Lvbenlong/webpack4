import _ from 'lodash'
import $ from 'jquery'

const dom = $('<div>')
dom.html(_.join(['ben', 'Lee', 'Hello'], '--'))
$('body').append(dom)

document.write('hellow world')