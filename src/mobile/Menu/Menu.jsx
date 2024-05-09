import React from "react";
import { useTranslation } from "react-i18next";

const Menu = ({ setMenuOpened, MenuOpened }) => {

  const { t, i18n } = useTranslation();

  return (
    <div className={"MobileMenu " + (MenuOpened ? "open" : "")}>
      Mobile Menu
    </div>
  );
};

export default Menu;
