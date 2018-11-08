const request = require('superagent')

const getGoogleHomePage = request.get('http://www.google.com/')
const getBingHomePage = request.get('http://www.bing.com/')

//Promise.all combines both our promises into another promise.
const getBothHomepagesInParallel = Promise.all([getGoogleHomePage, getBingHomePage])

getBothHomepagesInParallel
  .then(responses => {

    /*
    `responses` is an array of results :
    responses[0] is the result of just resolving `getGoogleHomePage`
    responses[1] is the result of just resolving `getBingHomePage`
    */

    //This prints the google home page
    console.log(responses[0].status)

    //This prints the bing home page
    console.log(responses[1].status)
  })