const directions = [
  "Starting point: Ironhack Madrid",
  "➔ Turn right toward P. de la Chopera",
  "← At the roundabout, take the 1st exit onto P. de la Chopera",
  "* Lune Creperie P. de la Chopera 33, Madrid"
];

function obtainDirections(step) {
  return new Promise(function (resolve, reject) {
    
    setTimeout(() => {

      if (directions[step]) {
        resolve(directions[step]);
      }
      else {
        reject();
      }
      
    }, 2000)

  } )
}



obtainDirections(0)
  .then((value1) => {
    console.log('value1 :', value1);
    return obtainDirections(1);
  })
  .then((value2) => {
    console.log('value2 :', value2);
    return obtainDirections(2);
  })
  .then((value3) => {
    console.log('value3 :', value3);
    return obtainDirections(3);
  })
  .catch(() => console.log('ERROR'))