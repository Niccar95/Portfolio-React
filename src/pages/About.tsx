import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { useScrollTop } from "../hooks/useScrollTop";

const About = () => {
  const { t } = useTranslation();
  useScrollTop();
  return (
    <>
      <section className="content">
        <div className="headingContainer">
          <h3 className="aboutHeading">
            <i className="bi bi-file-person-fill"></i>
            {t("about.heading")}
          </h3>
        </div>
        <div className="aboutWrapper">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="aboutImageContainer"
          >
            <img
              src="/portrait.jpeg"
              className="aboutImage"
              loading="lazy"
            ></img>
          </motion.div>
          <motion.section
            className="aboutDescription"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            <h3 className="tagline">{t("about.tagline").toUpperCase()}</h3>
            <p className="aboutParagraph">{t("about.paragraph1")}</p>
            <p className="aboutParagraph">{t("about.paragraph2")}</p>
            <p className="aboutParagraph">{t("about.paragraph3")}</p>
          </motion.section>
        </div>
      </section>
    </>
  );
};

export default About;
