const request = require('superagent')

let resGoogle
request.get('http://www.google.com/')
  .then((res)=> {
    resGoogle = res
    return request.get('http://www.bing.com/')
  })
  .then((res)=> {
    console.log('Bing : ', res.type)
    console.log('Google :', resGoogle.type)
  })
  .catch(err => console.error(err))