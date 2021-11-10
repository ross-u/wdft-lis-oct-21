const express = require("express");
// const greetings = require("./data");  // importing local modules - example
const PORT = 3000;

// Instantiate server object
const app = express();

// Route/endpoint:      domain.com/  domain.com/about  domain.com/users/profile
// Static files:        domain.com/views/index.html   domain.com/css/styles.css

app.use(express.static("public"));

// Routes
// GET POST PUT DELETE  (PATCH, ...)

// GET /
app.get("/", (req, res) => {
  // localhost:3000   localhost:3000/
  res.sendFile(__dirname + "/public/views/index.html"); // for sending files

  // res.json(); // for sending JSON objects
  // res.send();
  // res.render();
});

// GET /about
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/views/about.html");
});

// GET /works
app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/public/views/works.html");
});

app.use((req, res) => {
  res.sendFile(__dirname + "/public/views/404.html");
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
