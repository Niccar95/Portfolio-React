import { useTranslation } from "react-i18next";
import { ContactForm } from "../components/ContactForm";

const Contact = () => {
  const { t } = useTranslation();

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
