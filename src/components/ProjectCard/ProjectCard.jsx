import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title,image,imagealt,description,github,projectlink }) => {
  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <a href={projectlink} target="blank"><img className="project-image" src={image} alt={imagealt} /></a>
      <p className="project-description">
        {description}
      </p>
      <a className="project-link" target="blank" href={github}><p>Github Link</p></a>
    </div>
  );
};

export default ProjectCard;
