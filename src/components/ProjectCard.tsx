import { motion } from "motion/react";
import { useState } from "react";
import { Project } from "../models/Project";
import { useTranslation } from "react-i18next";

interface IProjectProps {
  project: Project;
}

const ProjectCard = ({ project }: IProjectProps) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const seeProject = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <motion.article
      className={`projectCard ${isExpanded ? "expanded" : ""}`}
      key={project.id}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={`projectImageContainer ${isExpanded ? "expanded" : ""}`}>
        <img
          src={project.image}
          alt={project.title}
          className="projectImage"
          onClick={() => project.url && seeProject(project.url)}
        ></img>
      </div>
      <div className="descriptionContainer">
        <h2>{project.displayTitle}</h2>

        <p>
          {isExpanded
            ? t(`projects.card.${project.title}.description`, {
                defaultValue: project.description,
              }) + " "
            : t(`projects.card.${project.title}.description`, {
                defaultValue: project.description,
              }).slice(0, 50) + "... "}
          <span
            onClick={() => setIsExpanded(!isExpanded)}
            className="expandText"
          >
            {isExpanded
              ? t("projects.card.read-less")
              : t("projects.card.read-more")}
          </span>
        </p>

        <a className="projectLink" href={project.url} target="_blank">
          {t("projects.card.visit")}
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
};

export default ProjectCard;
