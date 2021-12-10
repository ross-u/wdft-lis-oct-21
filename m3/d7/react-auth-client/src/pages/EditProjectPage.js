import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projectsService from "../services/projects.service";

const API_URL = "http://localhost:5005";

function EditProjectPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { projectId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {

      // const token = localStorage.getItem('authToken');        
      // const response = await axios.get(
      //   `${API_URL}/api/projects/${projectId}`,
      //    { headers: {Authorization: "Bearer " + token} }
      // );
        
      // or
      const response = await projectsService.getProject(projectId);
        
        const oneProject = response.data;
        setTitle(oneProject.title);
        setDescription(oneProject.description);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [projectId]);

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const requestBody = { title, description };

      // const token = localStorage.getItem('authToken');      
      // await axios.put(
      //   `${API_URL}/api/projects/${projectId}`,
      //   requestBody,
      //   { headers: {Authorization: "Bearer " + token} }
      // );
      
      // or
      const response = await projectsService.updateProject(projectId, requestBody);



      navigate(`/projects/${projectId}`);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProject = async () => {
    try {

      // const token = localStorage.getItem('authToken');      
      // axios.delete(
      //   `${API_URL}/api/projects/${projectId}`,
      //   { headers: {Authorization: `Bearer ${}`} }
      // );

      // or
      const response = await projectsService.deleteProject(projectId);      
      
      navigate("/projects");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="EditProjectPage">
      <h3>Edit the Project</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Update Project</button>
      </form>

      <button onClick={deleteProject}>Delete Project</button>
    </div>
  );
}

export default EditProjectPage;
