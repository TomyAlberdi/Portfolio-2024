import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedinIn, FaLink, FaCheck } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFileCircleCheck } from "react-icons/fa6";

const Contact = () => {
  const { t, i18n } = useTranslation();

  const [Copied, setCopied] = useState(false);

  const copySuccesful = async () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  };

  const copyEmail = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText("tomas.alberdi.2001@gmail.com");
      copySuccesful();
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = "tomas.alberdi.2001@gmail.com";
      textArea.style.position = "absolute";
      textArea.style.left = "-999999px";
      document.body.prepend(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
      } catch (error) {
        console.error(error);
      } finally {
        textArea.remove();
        copySuccesful();
      }
    }
  };

  return (
    <div className="Contact RightPanel">
      <div className="icon">
        <a href="https://github.com/TomyAlberdi" target="_blank">
          <FaGithub />
          <span>
            GitHub <FaLink />
          </span>
        </a>
      </div>
      <div className="icon">
        <a
          href="https://www.linkedin.com/in/tom%C3%A1s-alberdi/"
          target="_blank"
        >
          <FaLinkedinIn />
          <span>
            LinkedIn <FaLink />
          </span>
        </a>
      </div>
      <div className="icon">
        <article className={Copied ? "copied" : ""} onClick={copyEmail}>
          {Copied ? <FaFileCircleCheck /> : <MdEmail />}
          <span>
            {Copied ? (
              <>
                {t("CopiedMessage")} <FaCheck />
              </>
            ) : (
              <>
                Email <FaLink />
              </>
            )}
          </span>
        </article>
      </div>
      <form>form</form>
    </div>
  );
};

export default Contact;
