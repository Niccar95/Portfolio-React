import { useTranslation } from "react-i18next";
import { ContactForm } from "../components/ContactForm";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="contactHeading mobile">{t("contact.heading")}</h2>
      <section className="content">
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
