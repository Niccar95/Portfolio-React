// import { useEffect, useState } from "react";
import { Stack } from "../models/Stack";
import { languageSkills } from "../data/languageSkills";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

interface ISkillProps {
  stackList: Stack[];
}

const Skills = ({ stackList }: ISkillProps) => {
  const { t } = useTranslation();

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
            <div>
              <i className="bi bi-code-slash"></i>
              <h2 className="stackLabel">{t("home.stack-heading")} </h2>
            </div>
            <div className="iconContainer">
              {stackList.map((stack) => {
                if (stack.src.toLowerCase().includes("github")) {
                  return (
                    <i
                      key={stack.id}
                      className="devicon-github-plain stackIcon"
                    />
                  );
                } else if (stack.src.toLowerCase().includes("cypressio")) {
                  return (
                    <i
                      key={stack.id}
                      className="devicon-cypressio-plain stackIcon"
                    />
                  );
                } else {
                  return (
                    <img key={stack.id} className="stackIcon" src={stack.src} />
                  );
                }
              })}
            </div>
          </article>

          <section className="skillDescription">
            <div>
              <i className="bi bi-code-slash"></i>
              <h2 className="stackLabel">{t("home.stack-heading")}</h2>
            </div>
            <p>{t("skill-descriptions.stack")}</p>
          </section>
        </div>

        <div className="skillsContainer">
          <section className="skillDescription">
            <div>
              <i className="bi bi-translate"></i>
              <h2 className="stackLabel">
                {t("home.lang-skills.lang-heading")}
              </h2>
            </div>
            <p>{t("skill-descriptions.languages")}</p>
          </section>
          <article className="skillsCard">
            <div>
              <i className="bi bi-translate"></i>
              <h2 className="stackLabel">
                {t("home.lang-skills.lang-heading")}
              </h2>
            </div>
            <div className="languageContainer">
              {languageSkills.map((language) => (
                <div className="languageItem" key={language.id}>
                  <div className="skillName">
                    <p className="languageFlag">{language.flag}</p>
                    <p className="languageName">{t(`home.lang-skills.${language.name}`)}</p>
                  </div>
                  <div className="languageBar"></div>
                  <p className="percentage">100%</p>
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
