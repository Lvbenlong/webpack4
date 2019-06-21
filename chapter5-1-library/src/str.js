import _ from 'lodash'

export function join(a, b) {
  return a+b
}

export function connect(a, b) {
  return _,join([a, b], '---')
}
