const pr2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject('Something went wrong!')
  }, 2000)
})

pr2
  .then((val) => {
    // console.log('Resolved with:', val)
  })
  .catch((err) => {
    // console.log("Rejected with:" , err)
  })


const pr3 = new Promise(function (resolve, reject) {
    throw new Error('There was an error');
})


pr3
  .then((val) => {
    console.log('Resolved with:', val)
    return "123"
  })
  .catch((err) => {
    console.log("Rejected with:" , err)
  })