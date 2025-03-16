import { Project } from "../models/Project";
import "bootstrap-icons/font/bootstrap-icons.css";

import ProjectCard from "./ProjectCard";
interface IProjects {
  projects: Project[];
}

export const ProjectList = ({ projects }: IProjects) => {
  return (
    <>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </>
  );
};
