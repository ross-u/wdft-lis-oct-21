
const numbers = [1, 2, 3, 4, 5];

// forEach():
// - it doesn't return a new array. It returns undefined

numbers.forEach(function (number, i, arr) {
  console.log(number * 10)
})

// numbers.forEach( () => { })


// map():
// - returns a new array.


const prices = ["123", "1234", "567"];

// [123, 1234, 567];
const pricesNums = prices.map(function (str, i, arr) {
  return Number(str)
})


// ["<p>123</p>", "<p>1234</p>", "<p>567</p>"];
const paragraphs = prices.map(function (str, i, arr) {
  return `<p>${str}</p>`
})

console.log(`paragraphs`, paragraphs);


const data = [
  { name: 'Pants', price: 100, available: true, image: '...', size: 'S' },
  { name: 'Shirt', price: 10, available: true, image: '...', size: 'XL' },
  { name: 'Skirt', price: 200, available: true, image: '...', size: 'L' },
  { name: 'Jacket', price: 330, available: true, image: '...', size: 'XL' },
  { name: 'Jacket', price: 13, available: true, image: '...', size: 'L' },
  { name: 'Sweater', price: 67, available: true, image: '...', size: 'M' },
  { name: 'Shoes', price: 67, available: true, image: '...', size: 'XL' },
  { name: 'Dress', price: 23, available: true, image: '...', size: 'M' },
];


const sizes = data.map(function (product) {
  return product.size;
})
console.log(`sizes`, sizes)


//
const CONVERSION_RATE = 1.2;

const euros = data.map(function (product) {
  return product.price * CONVERSION_RATE;
})

console.log(`euros`, euros)