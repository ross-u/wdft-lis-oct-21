const fetch = require("node-fetch");

function getMovies() {
  return fetch("https://www.omdbapi.com/?s=spiderman&apikey=6008e883&").then(
    (response) => {
      return response.json();
    }
  );
}

module.exports = getMovies;
