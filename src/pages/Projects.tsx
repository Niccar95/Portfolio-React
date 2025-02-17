import { useState } from "react";
import { ProjectList } from "../components/ProjectList";
import { Project } from "../models/Project";
import { projects } from "../data/projects";

const Projects = () => {
  const [projectList] = useState<Project[]>(projects);
  console.log(projects);

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
          <ProjectList projects={projectList} />
        </div>
      </section>
    </>
  );
};

export default Projects;
