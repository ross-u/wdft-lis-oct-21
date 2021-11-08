
fetch("https://api.spacexdata.com/v4/launches")
  .then((response) => {
    console.log(`response`, response);

    // Convert the response body to a object that
    return response.json(); // Returns a pending promise
  })
  .then((convertedResponse) => {
    console.log('convertedResponse :', convertedResponse);
  })
  .catch((err) => {
    console.log('There was an error', err);
  })

  