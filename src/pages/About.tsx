import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
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
          <div className="aboutImageContainer">
            <img
              src="/portrait.jpeg"
              className="aboutImage"
              loading="lazy"
            ></img>
          </div>
          <section className="aboutDescription">
            <h3 className="tagline">{t("about.tagline").toUpperCase()}</h3>
            <p className="aboutParagraph">{t("about.paragraph1")}</p>
            <p className="aboutParagraph">{t("about.paragraph2")}</p>
            <p className="aboutParagraph">{t("about.paragraph3")}</p>
          </section>
        </div>
      </section>
    </>
  );
};

export default About;
