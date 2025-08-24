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
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const seeProject = (url: string) => {
    window.open(url, "_blank");
  };

  const codeString = "npm install react-oddball-icons";

  return (
    <>
      <motion.article
        className="projectCard"
        key={project.id}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
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
          <h3 className="projectTitle">{project.displayTitle}</h3>
          <p>
            {t(`projects.card.${project.title}.description`, {
              defaultValue: project.description,
            }).slice(0, 50) + "... "}
            <span
              onClick={() => {
                setIsExpanded(!isExpanded);
              }}
              className="expandText"
            >
              {t("projects.card.read-more")}
            </span>
          </p>

          <a className="projectLink" href={project.url} target="_blank">
            {t("projects.card.visit")}
            <i className="bi bi-box-arrow-up-right"></i>
          </a>
        </div>
        <section className="stackContainer">
          {project.stacks.map((stack, index) => (
            <img
              className="projectStackIcons"
              key={index}
              src={stack.src}
            ></img>
          ))}
        </section>
      </motion.article>

      {isExpanded && (
        <div className="modalBackdrop" onClick={() => setIsExpanded(false)}>
          <div className="projectModal" onClick={(e) => e.stopPropagation()}>
            <h3>{project.displayTitle}</h3>
            <div className="projectImageContainer">
              <img
                src={project.image}
                alt={project.title}
                className="projectImage"
                onClick={() => project.url && seeProject(project.url)}
              ></img>
            </div>
            <p>{t(`projects.card.${project.title}.description`)}</p>
            {project.category === "Library" && (
              <>
                <a
                  className="projectLink"
                  href="https://react-oddball-icons.vercel.app/"
                  target="_blank"
                >
                  {t("projects.card.visitAlt")}{" "}
                  <i className="bi bi-box-arrow-up-right"></i>
                </a>
                <div className="syntaxContainer">
                  <SyntaxHighlighter language="bash" style={tomorrow}>
                    {codeString}
                  </SyntaxHighlighter>
                </div>
              </>
            )}
            <motion.button
              onClick={() => setIsExpanded(false)}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <i className="bi bi-x-circle"></i>
              {t("projects.card.close")}
            </motion.button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
