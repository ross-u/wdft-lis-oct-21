/* 
- Property shorthand - way to create object quicker
- Object destructuring
- Array destructuring
- Default parameters
- spread operator
- rest operator
*/

// SPREAD OPERATOR

const students2 = ["Jose", "Luis", "Joana", "Anne"];

const studentsCopy1 = [].concat(students2);
const studentsCopy2 = students2.slice();
const studentsCopy3 = [...students2]; // <= copy with spread operator

// console.log(`studentsCopy1`, studentsCopy1);
// console.log(`studentsCopy2`, studentsCopy2);
// console.log(`studentsCopy3`, studentsCopy3);

const users1 = ["bob", "sarah"];
const users2 = ["jane", "john"];

const allUsers = [...users1, "maria", ...users2];

// console.log(`allUsers`, allUsers);

const info = { firstName: "Leea", lastName: "Martinez" };
const bio = { gender: "female", age: 28 };

const person3 = { ...info, ...bio, age: 31, language: "spanish" };

const newInfo = { ...info, lastName: "Perez" };

/* 
{ 
  firstName: "Leea", 
  lastName: "Martinez",
  gender: "female", 
  age: 31, 
  language: "spanish"
}
*/

console.log(`person3`, person3);
console.log(`newInfo`, newInfo);
