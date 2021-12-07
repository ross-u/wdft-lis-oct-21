import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';

const API_URL = "http://localhost:5005";

function EditProjectPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { projectId } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5005/api/projects/' + projectId);
        const oneProject = response.data;

        setTitle(oneProject.title);
        setDescription(oneProject.description);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
    
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const requestBody = { title: title, description: description };
      await axios.put('http://localhost:5005/api/projects/' + projectId, requestBody);

      // clear the form
      setTitle("");
      setDescription("");
      navigate('/projects/' + projectId);
    } catch (error) {
      
    }
  }
  
  return (
    <div className="EditProjectPage">
      <h3>Edit the Project</h3>

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
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default EditProjectPage;
