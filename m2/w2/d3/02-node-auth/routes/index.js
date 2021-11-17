const router = require("express").Router();
const isLoggedIn = require("./../middleware/isLoggedIn");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// GET /secret
// We use the isLoggedIn middleware to protect the route
router.get("/secret", isLoggedIn, (req, res) => {
  res.render("secret-view");
});

module.exports = router;
