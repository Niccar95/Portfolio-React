import { useEffect, useState } from "react";
import { Stack } from "../models/Stack";
import { languageSkills } from "../data/languageSkills";

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
        setIconSize("ci-3x");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="skillSectionWrapper">
        <article className="skillsCard">
          <h2 className="stackLabel">My Stack</h2>
          <div className="stackIconsWrapper">
            {stackList.map((stack) => (
              <i key={stack.id} className={`${stack.name} ${iconSize}`}></i>
            ))}
          </div>
        </article>
        <article className="skillsCard">
          <h2 className="stackLabel">Language Skills</h2>
          <div className="langSkillsWrapper">
            {languageSkills.map((language) => (
              <div className="languageItem" key={language.id}>
                <p className="skillName">{language.name}</p>
                <div className="languageBar"></div>
                <span className="percentage">100%</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </>
  );
};

export default Skills;
