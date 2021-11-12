/* 
- Property shorthand - way to create object quicker
- Object destructuring
- Array destructuring
- Default parameters
- spread operator
- rest operator

*/


// Function default parameters
function sum(a, b, c = 0) {
  return a + b + c;
}

const result = sum(5, 10);

console.log(`result`, result);
