import { Project } from "../models/Project";
import { motion } from "motion/react";
import "bootstrap-icons/font/bootstrap-icons.css";

interface IProjects {
  projects: Project[];
}

export const ProjectList = ({ projects }: IProjects) => {
  const seeProject = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <>
      {projects.map((project) => {
        return (
          <motion.article
            onClick={() => project.url && seeProject(project.url)}
            className="projectCard"
            key={project.id}
            whileHover={{ scale: 1.05 }}
          >
            <i className="bi bi-box-arrow-up-right"></i>
            <div className="projectImageContainer">
              <img src={project.image} className="projectImage"></img>
            </div>
            <div className="descriptionContainer">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <section className="stackContainer"></section>
          </motion.article>
        );
      })}
    </>
  );
};
