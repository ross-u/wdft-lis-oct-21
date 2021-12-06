import { useState } from 'react';
import axios from 'axios';

function AddProject({ refreshProjects }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDescr = (e) => setDescription(e.target.value);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault(); // prevent page reload
      
      const requestBody = { title, description };
      await axios.post('http://localhost:5005/api/projects', requestBody);

      // Clear the form
      setTitle("");
      setDescription("");
      refreshProjects(); // Calls the function from the parent component to refresh the list
    } catch (error) {
      console.log(error);
    }

  }
  
  return (
    <div className="AddProject">
      <h3>Add a Project</h3>

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input name="title" type="text" value={title} onChange={handleTitle} />
        
        <label>Description</label>
        <input name="description" type="text" value={description} onChange={handleDescr} />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddProject;