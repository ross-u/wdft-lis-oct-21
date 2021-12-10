import axios from "axios";
import { useState } from "react";
import projectsService from "../services/projects.service";

const API_URL = "http://localhost:5005";

function AddProject({ refreshProjects }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const requestBody = { title, description };

      // const token = localStorage.getItem('authToken');
      // await axios.post(
      //   `${API_URL}/api/projects`,
      //   requestBody,
      //   { headers: {Authorization: "Bearer " + token} }
      // );

      // or
      const response = await projectsService.createProject(requestBody);      

      

      // Reset the state
      setTitle("");
      setDescription("");

      refreshProjects();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="AddProject">
      <h3>Add Project</h3>

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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddProject;
