import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const MobileNavbar = () => {
  return (
    <div className='MobileNavbar'>
      <section className="openMenu">
        <RxHamburgerMenu />
      </section>
    </div>
  )
}

export default MobileNavbar