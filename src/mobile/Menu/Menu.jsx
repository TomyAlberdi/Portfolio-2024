import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Menu = ({ setMenuOpened, MenuOpened }) => {
  const { t, i18n } = useTranslation();

  return (
    <div className={"MobileMenu " + (MenuOpened ? "open" : "")}>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/"}
          onClick={() => setMenuOpened(!MenuOpened)}
        >
          {t("Home")}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/Experience"}
          onClick={() => setMenuOpened(!MenuOpened)}
        >
          {t("Experience")}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/Projects"}
          onClick={() => setMenuOpened(!MenuOpened)}
        >
          {t("Projects")}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/Contact"}
          onClick={() => setMenuOpened(!MenuOpened)}
        >
          {t("Contact")}
        </NavLink>
      </nav>
      <section
        className="languagePanel"
        onClick={() => {
          if (i18n.language === "es") {
            i18n.changeLanguage("en");
          } else {
            i18n.changeLanguage("es");
          }
        }}
      >
        {i18n.language === "es" ? (
          <svg
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.3998 0H-2.4002C-5.05116 0 -7.2002 2.14903 -7.2002 4.8V31.2C-7.2002 33.851 -5.05116 36 -2.4002 36H38.3998C41.0508 36 43.1998 33.851 43.1998 31.2V4.8C43.1998 2.14903 41.0508 0 38.3998 0Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M-7.2002 24H43.1998V36H-7.2002V24ZM-7.2002 0H43.1998V12H-7.2002V0Z"
              fill="#3ECBF8"
            />
            <path
              d="M17.9999 21.5999C19.9881 21.5999 21.5999 19.9881 21.5999 17.9999C21.5999 16.0117 19.9881 14.3999 17.9999 14.3999C16.0117 14.3999 14.3999 16.0117 14.3999 17.9999C14.3999 19.9881 16.0117 21.5999 17.9999 21.5999Z"
              fill="#FFDA2C"
            />
          </svg>
        ) : (
          <img src="usa-flag.png" alt="USA Flag" />
        )}
        {i18n.language === "es" ? <span> Español</span> : <span> English</span>}
      </section>
    </div>
  );
};

export default Menu;
