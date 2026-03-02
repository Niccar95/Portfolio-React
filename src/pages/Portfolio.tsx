import { useState } from "react";
import { ProjectList } from "../components/ProjectList";
import { Project } from "../models/Project";
import { projects } from "../data/projects";
import { Pagination } from "../components/Pagination";
import { useTranslation } from "react-i18next";
import { useScrollTop } from "../hooks/useScrollTop";

const Portfolio = () => {
  const { t } = useTranslation();
  useScrollTop();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [projectList] = useState<Project[]>(projects);
  const totalProjects = projectList.length;
  const projectsPerPage = 4;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  const lastProjectIndex = currentPage * projectsPerPage;
  const firstProjectIndex = lastProjectIndex - projectsPerPage;
  const currentProjects = projectList.slice(
    firstProjectIndex,
    lastProjectIndex
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 0);
    }
  };

  if (!projectList || projectList.length === 0) {
    return (
      <>
        <section className="content">
          <h1>{t("projects.heading")}</h1>
          <p>{t("projects.no-projects")}</p>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="content">
        <div className="headingContainer">
          <h3 className="projectsHeading">
            <i className="bi bi-briefcase-fill"></i>
            {t("projects.heading")}
          </h3>
        </div>
        <div className="projectsContainer">
          <ProjectList projects={currentProjects} />
        </div>
        <Pagination
          totalProjects={totalProjects}
          projectsPerPage={projectsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </section>
    </>
  );
};

export default Portfolio;
