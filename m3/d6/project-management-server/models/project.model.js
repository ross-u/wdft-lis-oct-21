const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const projectSchema = new Schema({
  title: String,
  description: String,
  tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
});

// Create model                 Project   -->  projects
const Project = mongoose.model("Project", projectSchema);

// Export the model
module.exports = Project;
