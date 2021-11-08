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


async function getDirections() {
// const getDirections = async () => {

  try {
    
    const value1 = await obtainDirections(0);
    console.log('value1 :', value1);
    
    const value2 = await obtainDirections(1);
    console.log('value2 :', value2);
    
    const value3 = await obtainDirections(2);
    console.log('value3 :', value3);
    
    const lastValue = await obtainDirections(5); // <- this one will reject
    
  } catch (err) {
    console.log('In catch block :', err)
  }


}

getDirections()