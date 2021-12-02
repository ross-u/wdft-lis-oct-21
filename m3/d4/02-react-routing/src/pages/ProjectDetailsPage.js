import projectsData from './../projects-data.json';
import { useState, useEffect } from 'react';

import { useParams, useNavigate, Navigate } from 'react-router-dom';


function ProjectDetailsPage() {
  const [foundProject, setFoundProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { projectId } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    const theProject = projectsData.find((oneProject) => {
      if (oneProject._id === projectId) {
        return true;
      }
    });

    setIsLoading(false);
    setFoundProject(theProject);
  }, [projectId]);


  if (!foundProject && !isLoading) {
    // We can navigate to another page (similar to redirect)
    return <Navigate to="/error" />
  }

  return (
    <div>
      {isLoading && <p>Loading ...</p>}

      {foundProject && (
        <>
          <h2>{foundProject.name}</h2>
          <h3>Tech Stack: { foundProject.technologies}</h3>
          <p>Description: { foundProject.description}</p>
        </>
      )}

      {/* Button to navigate to another page  */}
      <button onClick={ () => navigate("/")}> Home </button>
      
      {/* Back button */}
      <button onClick={ () => navigate(-1) }> Back </button>

    </div>
  );
}

export default ProjectDetailsPage;