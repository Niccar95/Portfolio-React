import { useState } from "react";
import { ProjectList } from "../components/ProjectList";
import { Project } from "../models/Project";
import { projects } from "../data/projects";
import { Pagination } from "../components/Pagination";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
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
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  if (!projectList || projectList.length === 0) {
    return (
      <>
        <section className="content">
          <h1>My Projects</h1>
          <p>No projects available at this moment.</p>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="content">
        <h1>My Projects</h1>
        <div className="listContainer">
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

export default Projects;
