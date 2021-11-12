/* 
- Property shorthand - way to create object quicker
- Object destructuring
- Array destructuring
- Default parameters
- spread operator
- rest operator
*/

const person2 = {
  name: "ironhacker",
  age: 25,
  address: {
    street: "Avenue Something",
    city: "Lisbon",
    number: 123,
  },
};

const {
  name,
  age,
  address: { street, city, number },
} = person2;

console.log(`name`, name);
console.log(`age`, age);
console.log(`street`, street);
console.log(`city`, city);
console.log(`number`, number);

const laptop2 = {
  brand: "Apple",
  model: "MacBook Pro",
  details: {
    price: 2000,
    year: 2019,
  },
};

// Using destructuring, create variables brand, model, price, year out of the object laptop2

const {
  brand,
  model,
  details: { price, year },
} = laptop2;

console.log(`price`, price);
console.log(`year`, year);
