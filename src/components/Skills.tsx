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
            <span>
              <i className="bi bi-code-slash"></i>
              <h2 className="stackLabel">{t("home.stack-heading")} </h2>
            </span>
            <div className="iconContainer">
              {stackList.map((stack) => (
                <img className="stackIcons" key={stack.id} src={stack.src} />
              ))}
            </div>
          </article>

          <section className="skillDescription">
            <span>
              <i className="bi bi-code-slash"></i>
              <h2 className="stackLabel">{t("home.stack-heading")}</h2>
            </span>
            <p>{t("skill-descriptions.stack")}</p>
          </section>
        </div>

        <div className="skillsContainer">
          <section className="skillDescription">
            <span>
              <i className="bi bi-translate"></i>
              <h2 className="stackLabel">
                {t("home.lang-skills.lang-heading")}
              </h2>
            </span>
            <p>{t("skill-descriptions.languages")}</p>
          </section>
          <article className="skillsCard">
            <span>
              <i className="bi bi-translate"></i>
              <h2 className="stackLabel">
                {t("home.lang-skills.lang-heading")}
              </h2>
            </span>
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
