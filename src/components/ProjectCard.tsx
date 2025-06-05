import { motion } from "motion/react";
import { useState } from "react";
import { Project } from "../models/Project";
import { useTranslation } from "react-i18next";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

interface IProjectProps {
  project: Project;
}

const ProjectCard = ({ project }: IProjectProps) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const seeProject = (url: string) => {
    window.open(url, "_blank");
  };

  const codeString = "npm install react-oddball-icons";

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
        <h3 className="projectTitle">{project.displayTitle}</h3>
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
        {project.category === "Library" && isExpanded === true && (
          <SyntaxHighlighter language="bash" style={tomorrow}>
            {codeString}
          </SyntaxHighlighter>
        )}
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
