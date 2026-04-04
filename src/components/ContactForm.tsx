import { FormEvent, useRef, useState, useEffect } from "react";
import emailjs from "../../emailjsConfig";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";

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

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const serviceId = "service_6vz097q";
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
      <motion.section
        className="socialLinks mobile"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h3 className="socialHeading">{t("contact.social.title")}</h3>
        <p className="socialText">{t("contact.social.description")}</p>
        <div className="linkContainer">
          <div className="socialIconLinks">
            <motion.a
              whileHover={{ scale: 1.08 }}
              href="https://github.com/Niccar95"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="bi bi-github"></i>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.08 }}
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
      </motion.section>

      <motion.div
        className="formWrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
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
          <AnimatePresence>
            {success && (
              <>
                <motion.div
                  className="messageBackdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.p
                  className="success"
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    x: "-50%",
                    y: "-50%",
                    rotate: -10,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: "-50%",
                    y: "-50%",
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    x: "-50%",
                    y: "-50%",
                    rotate: 10,
                  }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                >
                  <i className="bi bi-check-circle-fill"></i>{" "}
                  {t("contact.notifications.success")}
                </motion.p>
              </>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {error && (
              <>
                <motion.div
                  className="messageBackdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.p
                  className="error"
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    x: "-50%",
                    y: "-50%",
                    rotate: -10,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: "-50%",
                    y: "-50%",
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    x: "-50%",
                    y: "-50%",
                    rotate: 10,
                  }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                >
                  <i className="bi bi-exclamation-circle-fill"></i>{" "}
                  {t("contact.notifications.error", { errorMessage: error })}
                </motion.p>
              </>
            )}
          </AnimatePresence>
        </form>
        <motion.section
          className="socialLinks desktop"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        >
          <h3 className="socialHeading">{t("contact.social.title")}</h3>
          <p className="socialText">{t("contact.social.description")}</p>
          <div className="linkContainer">
            <div className="socialIconLinks">
              <motion.a
                whileHover={{ scale: 1.08 }}
                href="https://github.com/Niccar95"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.08 }}
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
        </motion.section>
      </motion.div>
    </>
  );
};
