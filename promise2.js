const request = require('superagent')

request.get('http://www.google.com/')
  .then((res) => {
    // Once we get the response, we print it to the console
    console.log(res.text)
  })
  .catch(err => console.error(err))