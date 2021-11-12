/* 
- Property shorthand - way to create object quicker
- Object destructuring
- Array destructring
- Default parameters
- spread operator
- rest operator
*/

const person = {
  name: "Ironhacker",
  age: 25,
  favoriteMusic: "Pop",
};

// OLD WAY
/* 
const name = person.name; // person['name']
const age = person.age;
const favoriteMusic = person.favoriteMusic;
*/

// Destructuring
const { name, age, favoriteMusic } = person;
// const { name, age, favoriteMusic: music } = person;

console.log(`name`, name);
console.log(`age`, age);
// console.log(`music`, music);

const laptop = {
  brand: "Apple",
  model: "MacBook Pro",
  year: 2021,
  chip: "M1",
  color: "Space Gray",
};

// Using destructuring, create variables brand, model, year, chip, color out of the object laptop

const { brand, model, year, chip, color, size } = laptop;

console.log(`brand`, brand);
console.log("chip", chip);

console.log(`size`, size); // Properties that don't exist will be undefined
