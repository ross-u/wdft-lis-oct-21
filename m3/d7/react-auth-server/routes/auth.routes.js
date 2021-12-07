// routes/auth.routes.js
const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const { isAuthenticated, isAdmin } = require("./../middleware/jwt.middleware");

const saltRounds = 10;

// POST /auth/signup
router.post("/auth/signup", async (req, res, next) => {
  try {
    // Get the data from req.body
    const { email, password, name } = req.body;

    // Validate that values are not empty strings
    if (email === "" || password === "" || name === "") {
      res.status(400).json({ message: "Provide email, password and name." });
      return;
    }

    // Validate email and password format
    // Use regex to validate the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({ message: "Provide a valid email address." });
      return;
    }

    // Use regex to validate the password format
    const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!passwordRegex.test(password)) {
      res.status(400).json({
        message:
          "Password must have at least 6 characters and contain at least one number, one lowercase and one uppercase letter.",
      });
      return;
    }

    // Check if email is not taken
    const foundUser = await User.findOne({ email });

    if (foundUser) {
      res.status(400).json({ message: "Provide a valid email" });
      return;
    }

    // Hash the password
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create the new user in the DB
    const createdUser = await User.create({
      email,
      password: hashedPassword,
      name,
    });

    // We should never expose passwords publicly
    const user = {
      _id: createdUser._id,
      email: createdUser.email,
      name: createdUser.name,
    };

    // Send the response back
    res.status(201).json({ user: user });
  } catch (error) {
    next(error);
  }
});

// POST /auth/login
router.post("/auth/login", async (req, res, next) => {
  try {
    // Get values from req.body
    const { email, password } = req.body;

    // Validate that values are not empty strings
    if (email === "" || password === "") {
      res.status(400).json({ message: "Provide email and password" });
      return;
    }

    // Check if the user exists
    const foundUser = await User.findOne({ email: email });

    if (!foundUser) {
      res.status(400).json({ message: "Provide a valid email" });
      return;
    }

    //  Compare the provided password with one from debugger
    const passwordCorrect = await bcrypt.compare(password, foundUser.password);

    if (passwordCorrect) {
      // We should never expose passwords publicly
      const payload = {
        _id: foundUser._id,
        email: foundUser.email,
        name: foundUser.name,
        role: foundUser.role, // 'admin' or 'user'
      };

      // Create a JWT with the payload
      // jwt.sign(payload, secretKey, options)
      const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
        algorithm: "HS256",
        expiresIn: "6h",
      });

      // Send the response
      res.status(200).json({ authToken: authToken });
    } else if (!passwordCorrect) {
      res.status(401).json({ message: "Unable to login the user" }); // Unathorized
    }
  } catch (error) {
    next(error);
  }
});

// GET /auth/verify  - auth integration of React app
router.get("/auth/verify", isAuthenticated, async (req, res, next) => {
  try {
    // If JWT is valid the payload gets decoded by isAuthenticated middleware
    // and made available on req.payload

    // Send back the object with the user data
    // previously saved as the token payload
    res.status(200).json(req.payload);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
