const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2021)
  }, 2000)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve( { name: "Margarida", campus: "Lisbon" } )
  }, 3000)
})

Promise.all([p1, p2, p3])
  .then((valuesArr) => {
    console.log("After promise all :", valuesArr)
  })
  .catch((err) => {
    console.log('In catch :', err)
  })