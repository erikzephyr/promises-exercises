const request = require('superagent')

request.get('http://www.google.com/').then(()=>{
  //An error occurs after promise1
  throw new Error('I am an error')
})
.then(()=> {
  //This is not executed
  return request.get('http://www.bing.com/')
})
.then(()=>{
  //Nor is this
  return request.get('http://www.facebook.com/')
})
.catch(err => {
  //The error thrown from promise1 is captured here, as it would be were it thrown from promise2 or promise3
  console.error(err)
})