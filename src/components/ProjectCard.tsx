import { useState } from "react";
import { Project } from "../models/Project";

interface IProjectProps {
  project: Project;
}

const ProjectCard = ({ project }: IProjectProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const seeProject = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <article
      className={`projectCard ${isExpanded ? "expanded" : ""}`}
      key={project.id}
    >
      <div className="projectImageContainer">
        <img
          src={project.image}
          alt={project.title}
          className="projectImage"
          onClick={() => project.url && seeProject(project.url)}
        ></img>
      </div>
      <div className="descriptionContainer">
        <h2>{project.title}</h2>

        <p>
          {isExpanded
            ? project.description
            : project.description.slice(0, 50) + "... "}
          <span
            onClick={() => setIsExpanded(!isExpanded)}
            className="expandText"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </span>
        </p>

        <a className="projectLink" href={project.url} target="_blank">
          Check it out
          <i className="bi bi-box-arrow-up-right"></i>
        </a>
      </div>
      <section className="stackContainer">
        {project.stacks.map((stack, index) => (
          <i key={index} className={`${stack.name} ci-lg`}></i>
        ))}
      </section>
    </article>
  );
};

export default ProjectCard;
