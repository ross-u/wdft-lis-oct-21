/* 
- Property shorthand - way to create object quicker
- Object destructuring
- Array destructuring
- Default parameters
- spread operator
- rest operator
*/

// REST OPERATOR   ...
// It is used in function parameters parentheses to collect values

function example(a, b, c) {
  // this
  // arguments
  console.log(`arguments`, arguments);
}

// example(10, 20, "abc", 12345);

const arrowExample = (a, ...args) => {
  console.log(`a`, a);
  console.log(`args`, args);
};

// arrowExample("123", "456", "hola", 789);

function sumAll(...numbers) {
  let total = 0;

  numbers.forEach((num) => {
    total += num;
  });

  console.log("total", total);
}

sumAll(1, 2, 3, 5, 89, 998);
