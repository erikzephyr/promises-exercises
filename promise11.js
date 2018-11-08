/*
* HOW TO TRANSFORM CALLBACK TO PROMISE
*/

/**
request.get('http://www.google.com/',(err, res)=> {
  if(err){
    console.error(err)
  }
  console.log(res.text)
})
 */

const request = require('superagent')

const getGoogleHomePage = new Promise((resolve, reject) => {
  request.get('http://www.google.com/', (err, res)=> {
    if(err){
      reject(err)
    }
    resolve(res)
  })
})

getGoogleHomePage
  .then(res=> console.log(res.status))
  .catch(err => console.error(err))