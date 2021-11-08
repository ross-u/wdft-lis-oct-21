
function func1(callback) {
  console.log('one');

  callback();
}

function func2() {
  console.log("two");
}


func1(func2)