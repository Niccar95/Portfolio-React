import { useEffect, useState } from "react";
import { Stack } from "../models/Stack";
import { languageSkills } from "../data/languageSkills";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

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
      <motion.div
        className="skillSectionWrapper"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <div className="skillsContainer">
          <article className="skillsCard">
            <h2 className="stackLabel">{t("home.stack-heading")}</h2>
            <div className="iconContainer">
              {stackList.map((stack) => (
                <i
                  key={stack.id}
                  className={`${stack.name} ${iconSize}`}
                  title={stack.name}
                ></i>
              ))}
            </div>
          </article>

          <section className="skillDescription">
            <h2>{t("home.stack-heading")}</h2>
            <p>{t("skill-descriptions.stack")}</p>
          </section>
        </div>

        <div className="skillsContainer">
          <section className="skillDescription">
            <h2>{t("home.lang-skills.lang-heading")}</h2>
            <p>{t("skill-descriptions.languages")}</p>
          </section>
          <article className="skillsCard">
            <h2 className="stackLabel">{t("home.lang-skills.lang-heading")}</h2>
            <div className="languageContainer">
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
      </motion.div>
    </>
  );
};

export default Skills;
