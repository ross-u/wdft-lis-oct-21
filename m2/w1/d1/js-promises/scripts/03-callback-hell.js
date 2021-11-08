const directions = [
  "Starting point: Ironhack Miami",
  "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
  "➔ Turn right onto S Miami Ave",
  "* Chipotle Mexican Grill 891 S Miami Ave, Miami"
];



function getDirections(step, callback, errorCallback) {

  setTimeout(() => {
    
    
    if (directions[step]) {
      console.log(directions[step]);
      callback()
    }
    else {
      errorCallback()
    }

  }, 2000)
}


getDirections(0, () => {
  getDirections(1, () => {
    getDirections(2, () => {
      getDirections(3, () => {

        console.log("Arrived at destination");
        
      }, () => { })
    }, () => { console.log('ERROR') })
  }, () => { console.log('ERROR') });
}, () => { console.log('ERROR') })