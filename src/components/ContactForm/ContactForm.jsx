import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const { t } = useTranslation();

  const form = useRef();

  const validateEmail = (email) => {
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const clearFields = () => {
    document.querySelector("[name='from_name']").value = ""
    document.querySelector("[name='from_email']").value = ""
    document.querySelector("[name='message']").value = ""
  }

  const check = () => {
    let nameValue = document.querySelector("[name='from_name']").value;
    let emailValue = document.querySelector("[name='from_email']").value;
    let messageValue = document.querySelector("[name='message']").value;
    if (!nameValue) {
      toast.warn(t("ContactErrorName"))
      return false;
    }
    if (!emailValue) {
      toast.warn(t("ContactErrorEmail"))
      return false
    }
    if (!validateEmail(emailValue)) {
      toast.warn(t("ContactWarnEmail"))
      return false
    }
    if (!messageValue) {
      toast.warn(t("ContactErrorMessage"))
      return false
    }
    return true;
  };

  const failed = () => {
    toast.error(t("ContactGenericError"))
  };

  const success = () => {
    toast.success(t("ContactSuccess"))
    clearFields()
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (check()) {
      emailjs
        .sendForm("service_65stqaj", "template_6iqcubj", form.current, {
          publicKey: "ASH07AAw_9d6qTiqG",
        })
        .then(success())
        .catch(error => failed());
    }
  };

  return (
    <>
      <ToastContainer />
      <form className="ContactForm" ref={form} onSubmit={sendEmail}>
        <label className="div1">
          {t("ContactName")}
          <input type="text" name="from_name" />
        </label>
        <label className="div2">
          {t("ContactEmail")}
          <input type="text" name="from_email" />
        </label>
        <label className="div3 message">
          {t("ContactMessage")}
          <textarea name="message"></textarea>
        </label>
        <div className="div4">
          <button type="submit">{t("ContactSubmit")}</button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
