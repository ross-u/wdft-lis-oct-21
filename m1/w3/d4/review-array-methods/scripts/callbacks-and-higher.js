function eatDinner() {
  console.log('Eating dinner 🍔!')
}

function eatCake() {
  console.log('Eating cake 🍰!!!');
}

// Function that receives other functions and calls them is called Higher Order function

function main(func1, func2) {

  console.log('In main!');

  func1();

  func2();
}

main(eatDinner, eatCake);


const didExercise = true;

function predictFuture() {
  if (didExercise) {
    return function () {
      console.log("Way to go, keep it up!")
    }
  }
  else if (!didExercise) {
    return function () {
      console.log("Ohhh boy! No bueno!")

    }
  }
}

const returnedFunc = predictFuture()

returnedFunc()