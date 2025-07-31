import { FormEvent, useRef, useState } from "react";
import emailjs from "../../emailjsConfig";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

export const ContactForm = () => {
  const { t } = useTranslation();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const form = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const serviceId = "service_xdvf47n";
    const templateId = "template_vsz1eiq";

    try {
      if (form.current) {
        const response = await emailjs.sendForm(
          serviceId,
          templateId,
          form.current
        );
        console.log("Email successfully sent:", response);
        setSuccess(true);
      }
    } catch (error) {
      console.error(error, "Failed to send message.");
      const e = error as Error;
      setError(
        e.message || "There was an error sending the email. Please try again."
      );
    } finally {
      setIsLoading(false);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <>
      <section className="socialLinks mobile">
        <h3 className="socialHeading">{t("contact.social.title")}</h3>
        <p className="socialText">{t("contact.social.description")}</p>
        <div className="linkContainer">
          <div className="socialIconLinks">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/Niccar95"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="bi bi-github"></i>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/nicolas-carrasco-6882402a5/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </motion.a>
          </div>
          <a
            href="mailto:carrasco.nicolas1995@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <i className="bi bi-envelope-fill socialEnvelope"></i>{" "}
            <span className="linkText">carrasco.nicolas1995@gmail.com</span>
          </a>
          <a
            href="https://www.google.se/maps/place/Stockholm/@59.3037671,17.9213502,11z/data=!3m1!4b1!4m6!3m5!1s0x465f763119640bcb:0xa80d27d3679d7766!8m2!3d59.3327036!4d18.0656255!16zL20vMDZteHM?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Location"
          >
            <i className="bi bi-geo-alt-fill"></i>{" "}
            <span className="linkText">
              Stockholm, {t("contact.social.country")}
            </span>
          </a>
        </div>
      </section>
      <article className="formWrapper">
        <form ref={form} onSubmit={handleSubmit}>
          <label>
            {t("contact.labels.name")}
            <input
              type="text"
              name="from_name"
              className="textArea"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder={t("contact.placeholders.name")}
            />
          </label>
          <label>
            {t("contact.labels.email")}
            <input
              type="email"
              name="from_email"
              className="textArea"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder={t("contact.placeholders.email")}
            />
          </label>
          <label>
            {t("contact.labels.subject")}
            <input
              type="text"
              className="textArea"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              placeholder={t("contact.placeholders.subject")}
            />
          </label>

          <label>
            {t("contact.labels.message")}
            <textarea
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder={t("contact.placeholders.message")}
            />
          </label>

          <motion.button
            type="submit"
            className="submitButton"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <i className="bi bi-send"></i>
            {isLoading
              ? `${t("contact.button.sending")}`
              : `${t("contact.button.send")}`}
          </motion.button>
          {success && (
            <p className="success">{t("contact.notifications.success")}</p>
          )}
          {error && (
            <p>{t("contact.notifications.error", { errorMessage: error })}</p>
          )}
        </form>
        <section className="socialLinks desktop">
          <h3 className="socialHeading">{t("contact.social.title")}</h3>
          <p className="socialText">{t("contact.social.description")}</p>
          <div className="linkContainer">
            <div className="socialIconLinks">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://github.com/Niccar95"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/nicolas-carrasco-6882402a5/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </motion.a>
            </div>
            <a
              href="mailto:carrasco.nicolas1995@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <i className="bi bi-envelope-fill socialEnvelope"></i>{" "}
              <span className="linkText">carrasco.nicolas1995@gmail.com</span>
            </a>
            <a
              href="https://www.google.se/maps/place/Stockholm/@59.3037671,17.9213502,11z/data=!3m1!4b1!4m6!3m5!1s0x465f763119640bcb:0xa80d27d3679d7766!8m2!3d59.3327036!4d18.0656255!16zL20vMDZteHM?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Location"
            >
              <i className="bi bi-geo-alt-fill"></i>{" "}
              <span className="linkText">
                Stockholm, {t("contact.social.country")}
              </span>
            </a>
          </div>
        </section>
      </article>
    </>
  );
};
