// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db"); // require("./db/index")

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app); // require("./config/index")

// default value for title local
const projectName = "book-app";
const capitalized = (string) =>
  string[0].toUpperCase() + string.slice(1).toLowerCase();

//  book-app   --> BOOK-APP
app.locals.title = `${capitalized(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const mainRoutes = require("./routes/main.routes");
app.use("/", mainRoutes);

const bookRoutes = require("./routes/books.routes");
app.use("/", bookRoutes);

const reviewsRoutes = require("./routes/reviews.routes");
app.use("/", reviewsRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
