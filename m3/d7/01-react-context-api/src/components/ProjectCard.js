// src/components/ProjectCard.js

import React from "react";

function ProjectCard({ project }) {
  return (
    <div className="ProjectCard">
      <h3>{project.name}</h3>
      <p>{project.technologies}</p>
    </div>
  );
}

export default ProjectCard;
