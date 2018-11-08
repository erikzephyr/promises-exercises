const request = require('superagent')

const resGoogle = await request.get('http://www.google.com/')
const resBing = await request.get('http://www.bing.com/')

console.log('Bing : ', resBing.text)
console.log('Google :', resGoogle.text)