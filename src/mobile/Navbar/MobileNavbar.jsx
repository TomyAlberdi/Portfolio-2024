import React from "react";
import { Divide as Hamburger } from 'hamburger-react'

const MobileNavbar = ({ setMenuOpened, MenuOpened }) => {

  const handleMenu = () => {
    setMenuOpened(!MenuOpened)
  }
  return (
    <div className="MobileNavbar">
      <section className="openMenu" onClick={handleMenu}>
        <Hamburger toggled={MenuOpened} />
      </section>
    </div>
  );
};

export default MobileNavbar;
