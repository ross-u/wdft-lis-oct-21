const express = require("express");
const router = express.Router();
const Project = require("./../models/project.model");
const mongoose = require("mongoose");

const { isAuthenticated } = require("./../middleware/jwt.middleware");
// req.payload has the user information in protected routes

// POST /api/projects - Create a new project
router.post("/api/projects", isAuthenticated, async (req, res, next) => {
  try {
    // req.payload has the user information
    // Get the data from the request body
    const { title, description } = req.body;

    // Save the data in the db
    const createdProject = await Project.create({
      title,
      description,
      tasks: [],
    });

    res.status(201).json(createdProject); // 201 Created
  } catch (error) {
    res.status(500).json(error); // Internal Server Error
  }
});

// GET /api/projects - Get all existing projects
router.get("/api/projects", isAuthenticated, async (req, res, next) => {
  try {
    const allProjects = await Project.find().populate("tasks");

    res.status(200).json(allProjects);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET /api/projects/:projectId  - Get a specific project
router.get(
  "/api/projects/:projectId",
  isAuthenticated,
  async (req, res, next) => {
    try {
      // Get the project id from the URL
      const { projectId } = req.params; //   in Express `:` means `req.params`

      if (!mongoose.Types.ObjectId.isValid(projectId)) {
        res.status(400).json({ message: "Invalid object id" });
        return;
      }

      // Make a DB query
      const oneProject = await Project.findById(projectId).populate("tasks");

      // Send the response
      res.status(200).json(oneProject);
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

// PUT  /api/projects/:projectId  - Update a specific project
router.put(
  "/api/projects/:projectId",
  isAuthenticated,
  async (req, res, next) => {
    try {
      // Get the project id
      const { projectId } = req.params;

      if (!mongoose.Types.ObjectId.isValid(projectId)) {
        res.status(400).json({ message: "Invalid object id" });
        return;
      }

      // Values to use for updating the project
      const { title, description } = req.body;

      const updatedProject = await Project.findByIdAndUpdate(
        projectId,
        { title, description },
        { new: true }
      );

      res.status(200).json(updatedProject);
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

// DELETE /api/projects/:projectId  - Delete a specific project
router.delete(
  "/api/projects/:projectId",
  isAuthenticated,
  async (req, res, next) => {
    try {
      const { projectId } = req.params;

      if (!mongoose.Types.ObjectId.isValid(projectId)) {
        res.status(400).json({ message: "Invalid object id" });
        return;
      }

      await Project.findByIdAndDelete(projectId);

      res.status(204).send(); // No Content
    } catch (error) {
      res.status(500).json(error);
    }
  }
);

module.exports = router;
