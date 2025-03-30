import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="content">
        <div className="headingContainer">
          <h2 className="aboutHeadingMobile">
            <i className="bi bi-file-person-fill"></i>
            {t("about.heading")}
          </h2>
        </div>
        <div className="aboutWrapper">
          <div className="aboutImageContainer">
            <img src="/portrait.jpeg" className="aboutImage"></img>
          </div>
          <section className="aboutDescription">
            <h2 className="aboutHeadingDesktop">{t("about.heading")}</h2>
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
