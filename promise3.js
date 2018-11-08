const request = require('superagent')

console.log('1');
request.get('http://www.google.com/', (err, res) => {
  console.log('2');
  if (err) {
    console.log('3');
    console.error(err)
  }
  console.log('4');
  console.log(res.status)

  //We call the second request inside the first ones callback, because we want to fire it only after we get the results of the first request
  request.get('http://www.bing.com/', (err, res) => {
    console.log('5');
    //We have to check for errors each time we make a request
    if (err) {
      console.log('6');
      console.error(err)
    }
    console.log('7');
    console.log(res.status)
  })
})
console.log('8');