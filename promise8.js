const request = require('superagent')

setTimeout(() => {
  console.log('1')
}, 10000);
const calculate = request.get('http://www.google.com/')
setTimeout(() => {
  console.log('2')
}, 10000);
calculate.then(answer => console.log(answer.status))

setTimeout(() => {
  console.log('3')
}, 10000);