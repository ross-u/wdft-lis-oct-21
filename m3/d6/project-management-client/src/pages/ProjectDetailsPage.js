import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProjectDetailsPage() {
  const [project, setProject] = useState(null);

  const { projectId } = useParams();
  // Make an axios call when the component is created
  // and get the project details from the server

  const getProject = async () => {
    try {
      const response = await axios.get('http://localhost:5005/api/projects/' + projectId);
      const oneProject = response.data;
      setProject(oneProject);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProject();
  }, [])

  return (
    <div className="ProjectDetails">
      {project && (
        <>
          <h1>{project.title}</h1>
          <p>{project.description}</p>

          <Link to={"/edit-project/" + project._id}>
            <button>Edit Project</button>
          </Link>
        </>  
      )}



      <h3>Tasks</h3>
      {project &&
        project.tasks.map((oneTask) => {
        return (
          <li className="TaskCard card" key={oneTask._id}>
            <h3>{oneTask.title}</h3>
            <h4>Description:</h4>
            <p>{oneTask.description}</p>
        </li>
        )
      })}

    </div>
  );
}

export default ProjectDetailsPage;