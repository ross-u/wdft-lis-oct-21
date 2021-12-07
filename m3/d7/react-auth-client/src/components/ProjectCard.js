import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function ProjectCard({ project }) {
  return (
    <div className="ProjectCard card">
      <Link to={`/projects/${project._id}`}>
        <h3>{project.title}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{project.description} </p>
    </div>
  );
}

export default ProjectCard;
