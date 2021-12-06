import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import AddProject from './../components/AddProject';

function ProjectListPage() {
  const [projects, setProjects] = useState([]);

  const getAllProjects = async () => {
    try {
      const response = await axios.get("http://localhost:5005/api/projects");
      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className="ProjectListPage">
      <h3>Projects</h3>

      <AddProject refreshProjects={getAllProjects}  />

      {projects.map((oneProject) => {
        return (
          <div className="ProjectCard card" key={oneProject._id}>
            <Link to="/projects/PROJECT_ID_GOES_HERE">
              <h3>{oneProject.title}</h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectListPage;
