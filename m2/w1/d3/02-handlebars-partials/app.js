const express = require("express");
const moviesArr = require("./movies-data");
const hbs = require("hbs");
const fetch = require("node-fetch");
const getMovies = require("./get-movies");

// moviesArr -> [ {}, {}, {} ... ]

const app = express();

// SETUP VIEW ENGINE
app.set("view engine", "hbs");
// SETUP THE FOLDER WITH TEMPLATES
app.set("views", __dirname + "/views");

// SET UP THE FOLDER FOR HBS PARTIALS
hbs.registerPartials(__dirname + "/views/partials");

// MIDDLEWARE
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.render("index-view");
});

app.get("/movies", (req, res) => {
  getMovies().then((convertedResponse) => {
    console.log(`convertedResponse.Search`, convertedResponse.Search);

    res.render("movies-view", { movieList: convertedResponse.Search });
  });
});

// Start the server
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
