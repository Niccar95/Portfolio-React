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
    }
  };

  return (
    <article className="formCard">
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
        {success && <p>{t("contact.notifications.success")}</p>}
        {error && (
          <p>{t("contact.notifications.error", { errorMessage: error })}</p>
        )}
      </form>
    </article>
  );
};
