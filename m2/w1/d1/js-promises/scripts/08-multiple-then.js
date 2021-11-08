const pr4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("A");
  }, 2000)
})



pr4
  .then((value1) => {
    console.log('value1 :', value1);

    return "B";
  })
  .then((value2) => {
    console.log('value2 :', value2);
  })
  .catch((err) => {
    console.log('In catch :', err);
  })