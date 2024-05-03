import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const MobileNavbar = () => {
  return (
    <div className='MobileNavbar'>
      <section className="openMenu">
        <RxHamburgerMenu />
      </section>
      <section>
        <img src="favicon.ico" alt="Tomás Alberdi Icon" />
      </section>
    </div>
  )
}

export default MobileNavbar