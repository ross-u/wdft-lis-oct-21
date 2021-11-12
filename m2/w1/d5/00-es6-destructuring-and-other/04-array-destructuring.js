/* 
- Property shorthand - way to create object quicker
- Object destructuring
- Array destructuring
- Default parameters
- spread operator
- rest operator
*/

const numbers = ["one", "two", "three", "four"];

// OLD WAY
// const first = numbers[0];

// DESTRUCTURING
const [first, second, , fourth] = numbers;

console.log(`first`, first);
console.log(`second`, second);

const people = ["David", "Uros", "Stefano"];

// Destructure the array people and create variables ta, student, teacher and put values in the right way

const [student, teacher, ta] = people;

console.log(`teacher`, teacher);
console.log(`student`, student);
console.log(`ta`, ta);

const campuses = ["madrid", "barcelona", "lisbon"];

// Default value - fallback when value is undefined
const [campus1, campus2, campus3, campus4 = "paris"] = campuses;

console.log(`campus1`, campus1);
console.log(`campus2`, campus2);

console.log(`campus4`, campus4);
