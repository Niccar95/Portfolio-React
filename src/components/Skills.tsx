import { useEffect, useState } from "react";
import { Stack } from "../models/Stack";

interface ISkillProps {
  stackList: Stack[];
}

const Skills = ({ stackList }: ISkillProps) => {
  const [iconSize, setIconSize] = useState("ci-4x");
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIconSize("ci-2x");
      } else {
        setIconSize("ci-4x");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <article className="skillsCard">
      <h2 className="stackLabel">My Stack</h2>
      <div className="stackIconsWrapper">
        {stackList.map((stack) => (
          <i key={stack.id} className={`${stack.name} ${iconSize}`}></i>
        ))}
      </div>
    </article>
  );
};

export default Skills;
