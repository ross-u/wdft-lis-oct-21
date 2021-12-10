import axios from "axios";
import { useState } from "react";
import tasksService from './../services/tasks.service';

const API_URL = "http://localhost:5005";

function AddTask({ refreshProject, projectId }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // Create an object representing the body of the POST request
      const requestBody = { title, description, projectId };

      const token = localStorage.getItem('authToken');      
      await axios.post(
        `${API_URL}/api/tasks`,
        requestBody,
        { headers: {Authorization: "Bearer " + token} }
      );
      // or
      // await tasksService.createTask(requestBody);

      // Reset the state to clear the inputs
      setTitle("");
      setDescription("");

      // Invoke the callback function coming through the props
      // from the ProjectDetailsPage, to refresh the project details
      refreshProject();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="AddTask">
      <h3>Add New Task</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
