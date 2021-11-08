const pr1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('Ironhack');
  }, 2000)
})


pr1
  .then((val) => {
    // console.log('In then: ', val)
  })
