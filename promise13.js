const request = require('superagent')

request.get('http://www.google.com/')
  .then((res)=> {
    return Promise.all([res, request.get('http://www.bing.com/')])
  })
  .then(([resGoogle, resBing])=> {
    console.log('Bing : ', resBing.type)
    console.log('Google :', resGoogle.type)
  })
  .catch(err => console.error(err))
