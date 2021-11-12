/* 
- Property shorthand - way to create object quicker
- Object destructuring
- Array destructring
- Default parameters
- spread operator
- rest operator
*/

const name = "Sarah";
const campus = "Lisbon";

// OLD WAY
const student = {
  name: name,
  campus: campus,
};

const student2 = {
  name,
  campus,
};

console.log(`student`, student);
console.log(`student2`, student2);

const city = "Barcelona";
const street = "Diputacio";
const number = 377;
const zipCode = 08013;

// Create an object with properties city, street, number, zipCode using shorthand syntax
const address = { city, street, number, zipCode };
console.log(`address`, address);
