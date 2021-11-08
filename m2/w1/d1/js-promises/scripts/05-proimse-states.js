const promisePending1 = new Promise(function (resolve, reject) { })

const promisePending2 = new Promise((resolve, reject) => { })
console.log(promisePending1);



const promiseResolved = Promise.resolve(42);
console.log(promiseResolved);


const promiseRejected = Promise.reject("We rejected it!");
console.log(promiseRejected);



// https://codesandbox.io/s/boring-ellis-fq9yv?file=/src/index.js