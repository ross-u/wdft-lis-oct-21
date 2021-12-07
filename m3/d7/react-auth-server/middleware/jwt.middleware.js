// middleware/jwt.middleware.js

const jwt = require("express-jwt");

// Instantiate the JWT token validation middleware
const isAuthenticated = jwt({
  secret: process.env.TOKEN_SECRET,
  algorithms: ["HS256"],
  requestProperty: "payload", // --> req.payload
  getToken: getTokenFromHeaders,
});

// Function used to extracts the JWT token from the request's 'Authorization' Headers
function getTokenFromHeaders(req) {
  // Check if the token is available on the request Headers
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    // Get the encoded token string and return it
    const token = req.headers.authorization.split(" ")[1];
    return token;
  }

  return null;
}

// CUSTOM MIDDLEWARE
function isAdmin(req, res, next) {
  if (req.payload && req.payload.role === "admin") {
    next();
  } else {
    throw new Error("User is not an admin");
  }
}

// Export the middleware so that we can use it to create a protected routes
module.exports = {
  isAuthenticated,
  isAdmin,
};
