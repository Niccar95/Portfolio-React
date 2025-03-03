import { FormEvent, useRef, useState } from "react";
import emailjs from "../../emailjsConfig";

export const ContactForm = () => {
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
      setError("There was an error sending the email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <article className="formCard">
      <form ref={form} onSubmit={handleSubmit}>
        <label>
          Subject:
          <input
            type="text"
            className="textArea"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            placeholder="Lorem ipsum..."
          />
        </label>

        <label>
          Message:
          <textarea
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="This is a message..."
          />
        </label>

        <button type="submit">{isLoading ? "Sending..." : "Send"}</button>
        {success && <p>Email sent successfully!</p>}
        {error && <p>{error}</p>}
      </form>
    </article>
  );
};
