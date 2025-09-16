import { useEffect, useRef, useState } from "react";
import { Stack } from "../models/Stack";
import { stacks } from "../data/stacks";
import Skills from "../components/Skills";
import { motion, useInView } from "motion/react";
import { useTranslation } from "react-i18next";
import { useScrollTop } from "../hooks/useScrollTop";

const Home = () => {
  const { t } = useTranslation();
  useScrollTop();
  const [stackList] = useState<Stack[]>(stacks);
  const currentLang = localStorage.getItem("language") || "en";
  const [run, setRun] = useState<boolean>(false);

  const skillsRef = useRef(null);
  const isInView = useInView(skillsRef, { once: true, margin: "-100px" });

  const introHeadingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (introHeadingRef.current) {
        introHeadingRef.current.classList.add("doneTyping");
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const onButtonClick = () => {
    const pdfFilename =
      currentLang === "sv" ? "CV-Svenska.pdf" : "CV-English.pdf";

    const link = document.createElement("a");
    link.href = `/${pdfFilename}`;
    link.download = `CV-${currentLang.toLocaleUpperCase()}.pdf`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setRun(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <motion.section
        className="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div className="headingContainer">
          <h3 className="homeHeading">
            {" "}
            <i className="bi bi-house-door-fill"></i>
            {t("home.heading")}
          </h3>
        </motion.div>

        <motion.section
          className="heroSection"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="avatarImageContainer">
            <motion.img
              className="avatarImage"
              src="/portrait.jpeg"
              alt="My image"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
          <motion.div
            className="introductionContainer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            <h1 ref={introHeadingRef} className="introHeading">
              <span className="nameLabel1">Nicolas</span>{" "}
              <span className="nameLabel2">Carrasco</span>
            </h1>

            {run && (
              <h1 className={`introHeading introSubheading ${currentLang}`}>
                <span className="nameLabel2">Frontend</span>{" "}
                <span className="nameLabel1">{t("home.occupation")}</span>
              </h1>
            )}

            <motion.p
              className="introduction"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 4 }}
            >
              {t("home.presentation")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 5 }}
            >
              <motion.button
                className="heroButton"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                onClick={onButtonClick}
              >
                <i className="bi bi-download"></i>
                {t("home.cv-button")} - {currentLang.toLocaleUpperCase()}
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.section>
      </motion.section>

      <motion.section
        className="content"
        ref={skillsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Skills stackList={stackList} />
      </motion.section>
    </>
  );
};

export default Home;
