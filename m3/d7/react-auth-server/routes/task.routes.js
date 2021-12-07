const express = require("express");
const router = express.Router();
const Task = require('./../models/task.model');
const Project = require('./../models/project.model');
const mongoose = require('mongoose');

const { isAuthenticated } = require('./../middleware/jwt.middleware');


// POST   /api/tasks - Create a new task for an existing project
router.post('/api/tasks', async (req, res, next) => {
  try {
    const { title, description, projectId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(projectId)) {
      res.status(400).json({ message: "Invalid object id" });
      return;
    }

    // Create the task
    const createdTask = await Task.create({ title, description, project: projectId });

    // Update the project to which the task belongs
    await Project.findByIdAndUpdate(projectId, { $push: { tasks: createdTask._id } });

    res.status(201).json(createdTask);  // Created
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = router;
