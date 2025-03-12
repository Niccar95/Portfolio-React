import { Project } from "../models/Project";
import { motion } from "motion/react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
interface IProjects {
  projects: Project[];
}

export const ProjectList = ({ projects }: IProjects) => {
  const seeProject = (url: string) => {
    window.open(url, "_blank");
  };

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {projects.map((project) => {
        return (
          <motion.article
            className="projectCard"
            key={project.id}
            whileHover={{ scale: 1.05 }}
          >
            {/* <i className="bi bi-box-arrow-up-right"></i> */}
            <div className="projectImageContainer">
              <img
                src={project.image}
                className="projectImage"
                onClick={() => project.url && seeProject(project.url)}
              ></img>
            </div>
            <div className="descriptionContainer">
              <h2>{project.title}</h2>
              {/* <p>{project.description}</p> */}

              <p>
                {isExpanded
                  ? project.description
                  : project.description.slice(0, 50) + "... "}
                <span
                  onClick={() => setIsExpanded(!isExpanded)}
                  style={{
                    color: "blue",
                    cursor: "pointer",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
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
          </motion.article>
        );
      })}
    </>
  );
};
