import { useTranslation } from "react-i18next";
import { ContactForm } from "../components/ContactForm";
import { useScrollTop } from "../hooks/useScrollTop";

const Contact = () => {
  const { t } = useTranslation();
  useScrollTop();

  return (
    <>
      <section className="content">
        <div className="headingContainer">
          <h3 className="contactHeading">
            {" "}
            <i className="bi bi-envelope-fill"></i>
            {t("contact.heading")}
          </h3>
        </div>
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
