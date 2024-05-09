import React from "react";

const Menu = ({ setMenuOpened, MenuOpened }) => {
  return (
    <div className={"MobileMenu " + (MenuOpened ? "open" : "")}>
      Mobile Menu
    </div>
  );
};

export default Menu;
