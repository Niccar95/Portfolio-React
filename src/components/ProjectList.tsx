import { Project } from "../models/Project";

interface IProjects {
  projects: Project[];
}

export const ProjectList = ({ projects }: IProjects) => {
  return (
    <>
      {projects.map((project) => {
        return (
          <article className="projectCard" key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </article>
        );
      })}
    </>
  );
};
