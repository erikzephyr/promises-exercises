const request = require('superagent')

const nothing = ()=>{}

request.get('http://www.google.com/')
  .then((res)=> {
    console.log(res.text)
  })
  .then(nothing)
  .then(nothing)
  .then(nothing)
  .then(()=> request.get('http://www.bing.com/'))
  .then((res)=> {
    console.log(res.text)
  })
  .catch(err => console.error(err))