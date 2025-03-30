import { useTranslation } from "react-i18next";
import { ContactForm } from "../components/ContactForm";

const Contact = () => {
  const { t } = useTranslation();
  // const text = "Let's get in touch!";

  return (
    <>
      <section className="content">
        <div className="headingContainer">
          <h2 className="contactHeading mobile">
            {" "}
            <i className="bi bi-envelope-fill"></i>
            {t("contact.heading")}
          </h2>
        </div>
        <ContactForm />

        {/* <div
          style={{
            width: "100%",
            position: "relative",
          }}
        >
          <motion.p
            initial={{ width: 0 }}
            animate={{
              width: ["0%", "60%", "0%"],
            }}
            transition={{
              duration: 7,
              ease: ["easeIn", "easeOut"],
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
            style={{
              position: "absolute",
              left: 30,
              display: "inline-block",
              overflow: "hidden",
              whiteSpace: "nowrap",
              borderRight: "4px solid white",
            }}
          >
            {text}
          </motion.p>
        </div> */}
      </section>
    </>
  );
};

export default Contact;
