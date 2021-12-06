const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the schema
const taskSchema = new Schema({
  title: String,
  description: String,
  project: { type: Schema.Types.ObjectId, ref: "Project" },
});

// Create the model          Task   --> tasks
const Task = mongoose.model("Task", taskSchema);

// Export the model
module.exports = Task;
