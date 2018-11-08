const calculate = new Promise(resolve => {
  console.log('1')
  setTimeout(()=>{
    console.log('2')
    resolve(42)
  }, 1000)
  console.log('3')
})
console.log('4')
calculate.then(answer => console.log(answer))
  //Prints 42
console.log('5')