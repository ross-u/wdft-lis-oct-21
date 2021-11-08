
async function getData() {

  try {
    const response = await fetch("https://api.spacexdata.com/v4/launches");
    
    const convertedResponse = await response.json();
    console.log('convertedResponse :', convertedResponse);

  } catch (err) {
    console.log('There was an error', err);
  }

}

getData();