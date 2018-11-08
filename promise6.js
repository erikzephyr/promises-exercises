const request = require('superagent')

const aNewPromise = request.get('http://www.google.com/').then(someValue => {
  return 'Google'
})

aNewPromise.then(newValue => {
  console.log(newValue)
})
// 'foo' is printed on to the console

const containerPromise = request.get('http://www.bing.com/').then(someValue => {
  return 'aNewPromise'
})

containerPromise.then(newValue => {
  console.log(newValue)
})
// 'foo' is printed on to the console