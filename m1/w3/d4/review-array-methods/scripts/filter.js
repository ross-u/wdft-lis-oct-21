const data = [
  { name: 'Pants', price: 100, available: true, image: '...', size: 'S' }, //
  { name: 'Shirt', price: 10, available: true, image: '...', size: 'XL' },
  { name: 'Skirt', price: 200, available: false, image: '...', size: 'L' }, //
  { name: 'Jacket', price: 330, available: true, image: '...', size: 'XL' }, //
  { name: 'Jacket', price: 13, available: false, image: '...', size: 'L' },
  { name: 'Sweater', price: 67, available: false, image: '...', size: 'M' },
  { name: 'Shoes', price: 67, available: true, image: '...', size: 'XL' },
  { name: 'Dress', price: 23, available: true, image: '...', size: 'M' },
];


// filter():
// - returns a new array
// - returns an array of new elements that pass the check in the function


const filteredProducts = data.filter(function (product) {
  return product.price >= 100;
});
console.log(`filteredProducts`, filteredProducts)


const availableProducts = data.filter(function (product) {
  return product.available;
})
console.log(`availableProducts`, availableProducts);