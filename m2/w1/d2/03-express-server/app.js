const express = require("express");

const app = express();

// Middleware that serves files from the /public folder
app.use(express.static("public"));

// GET  /
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/views/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/views/about.html");
});

app.listen(3000, () => {
  console.log("Server is running!");
});
