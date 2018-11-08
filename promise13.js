const request = require('superagent')

function checkStatusWebsites() {
  request.get('http://www.google.com/')
  .then((res)=> {
    return Promise.all([res, request.get('http://www.bing.com/'), request.get('http://www.kaiju-tv.com/')])
  })
  .then(([resGoogle, resBing, resFB])=> {
    console.log('Bing : ', resBing.status)
    console.log('Google :', resGoogle.status)
    console.log('FB :', resFB.status)
  })
  .catch(err => console.error(err))
}

checkStatusWebsites()