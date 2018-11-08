const request = require('superagent')

request.get('http://www.google.com/')
  .then((res)=> {
    console.log('Google')
    return request.get('http://www.bing.com/')
  })
  .then((res)=> {
    console.log('Bing')
    return request.get('http://www.facebook.com/')
  })
  .then((res)=> {
    console.log('Facebook')
  })
  .catch(err => console.error(err))