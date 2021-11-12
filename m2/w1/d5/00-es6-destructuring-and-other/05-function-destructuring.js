/* 
- Property shorthand - way to create object quicker
- Object destructuring
- Array destructuring
- Default parameters
- spread operator
- rest operator

*/

// Destructuring function parameters when receiving objects
function printName({ firstName, lastName }) {
  console.log(`The name is ${firstName} ${lastName}`);
}

printName({ firstName: "James", lastName: "Bond" });
