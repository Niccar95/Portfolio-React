import { useEffect, useState } from "react";
import { Stack } from "../models/Stack";
import { languageSkills } from "../data/languageSkills";
import { useTranslation } from "react-i18next";

interface ISkillProps {
  stackList: Stack[];
}

const Skills = ({ stackList }: ISkillProps) => {
  const [iconSize, setIconSize] = useState("ci-4x");
  const { t } = useTranslation();

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
        <article className="skillsCard rigth">
          <h2 className="stackLabel">{t("home.stack-heading")}</h2>
          <div className="stackIconsWrapper">
            {stackList.map((stack) => (
              <i
                key={stack.id}
                className={`${stack.name} ${iconSize}`}
                title={stack.name}
              ></i>
            ))}
          </div>
        </article>
        <article className="skillsCard left">
          <h2 className="stackLabel">{t("home.lang-skills.lang-heading")}</h2>
          <div className="langSkillsWrapper">
            {languageSkills.map((language) => (
              <div className="languageItem" key={language.id}>
                <p className="skillName">
                  {t(`home.lang-skills.${language.name}`)}
                </p>
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
