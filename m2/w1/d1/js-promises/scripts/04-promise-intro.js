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
        console.log(directions[step]);
        resolve();
      }
      else {
        reject();
      }
      
    }, 2000)

  } )
}


obtainDirections(0)
  .then(() => obtainDirections(5))
  .then(() => obtainDirections(2))
  .then(() => obtainDirections(3))
  .catch(() => console.log('ERROR'))