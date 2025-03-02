import { Stack } from "../models/Stack";

interface ISkillProps {
  stackList: Stack[];
}

const Skills = ({ stackList }: ISkillProps) => {
  return (
    <article className="skillsCard">
      <h2 className="stackLabel">My Stack</h2>
      <div className="stackIconsWrapper">
        {stackList.map((stack) => (
          <i key={stack.id} className={`${stack.name} ci-4x`}></i>
        ))}
      </div>
    </article>
  );
};

export default Skills;
