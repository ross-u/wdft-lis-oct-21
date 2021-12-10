import axios from "axios";
import { useState, useEffect } from "react";
import ProjectCard from "./../components/ProjectCard";
import AddProject from "../components/AddProject";
import projectsService from "../services/projects.service";

const API_URL = "http://localhost:5005";

function ProjectListPage() {
  const [projects, setProjects] = useState([]);

  const getAllProjects = async () => {
    try {
      // We must include the token in the request
      // const token = localStorage.getItem("authToken");
      // const response = await axios.get(
      //   `${API_URL}/api/projects`,
      //    { headers: {Authorization: "Bearer " + token} }
      // );

      // or
      const response = await projectsService.getAllProjects();

      setProjects(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <div className="ProjectListPage">
      <AddProject refreshProjects={getAllProjects} />

      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
}

export default ProjectListPage;
