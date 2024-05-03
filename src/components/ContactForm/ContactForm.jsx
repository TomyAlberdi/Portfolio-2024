import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t, i18n } = useTranslation();

  const en_template_id = "template_4g5wytf";
  const es_template_id = "template_95ysoxi";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_65stqaj",
        i18n.language == "en" ? en_template_id : es_template_id,
        form.current,
        {
          publicKey: "ASH07AAw_9d6qTiqG",
        }
      )
      .then(console.log("SUCCESS!"))
      .catch((error) => {
        console.log("FAILED...", error.text);
      });
  };

  return (
    <form className="ContactForm" ref={form} onSubmit={sendEmail}>
      <label className="div1">
        {t("ContactName")}
        <input type="text" name="contactName" />
      </label>
      <label className="div2">
        {t("ContactEmail")}
        <input type="email" name="contactEmail" />
      </label>
      <label className="div3">
        {t("ContactMessage")}
        <textarea name="contactMessage"></textarea>
      </label>
      <div className="div4">
        <button type="submit">{t("ContactSubmit")}</button>
      </div>
    </form>
  );
};

export default ContactForm;
