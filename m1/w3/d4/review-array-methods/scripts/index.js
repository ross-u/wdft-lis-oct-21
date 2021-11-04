/* 
- Review the callbacks
- Explain the syntax of array methods forEach, map, filter, reduce
- Explain the difference between the array methods forEach, map, filter, reduce
- Practice the use of array methods forEach, map, filter, reduce

- Exercise: forEach & map  - https://gist.github.com/ross-u/9704edbf94fad12b428e539a34dfa47b
- Exercise: filter - https://gist.github.com/ross-u/8cbb5d9c901e81ed517f041c5ce19782

- Summary/cheatsheet: https://gist.github.com/ross-u/97c39ea0a55ced695c0e1be8136ee5c6
*/

// const students = ['raissa', 'joana', 'yuri', 'jose', 'max'];



// for (let index = 0; index < students.length; index++) {
//   console.log(students[index])
// }


// students.reverse().forEach(function (student) {
//   console.log(student);
// })


const data = [
  { name: 'Pants', price: 100, available: true, image: '...', size: 'S' }, //
  { name: 'Shirt', price: 10, available: true, image: '...', size: 'XL' },
  { name: 'Skirt', price: 200, available: false, image: '...', size: 'L' }, //
  { name: 'Dress', price: 23, available: true, image: '...', size: 'M' },
];


const filteredByPrice = data.filter(function (product) {
  return product.price >= 100;
})
console.log(`filteredByPrice`, filteredByPrice)


const productNames = filteredByPrice.map(function (product) {
  return product.name;
})

console.log(`productNames`, productNames)



const onlyNames = data
  .filter(function (product) {
    return product.price >= 100;
  })
  .map(function (product) {
    return product.name;
  })


  console.log(`onlyNames`, onlyNames)