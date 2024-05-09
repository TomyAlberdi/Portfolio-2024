import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './../components/Navbar/Navbar';
import MobileNavbar from './../mobile/Navbar/MobileNavbar';
import Menu from './../mobile/Menu/Menu';

const BasicLayout = () => {

  const [MenuOpened, setMenuOpened] = useState(false)

  return (
    <div className='Layout'>
      <MobileNavbar MenuOpened={MenuOpened} setMenuOpened={setMenuOpened} />
      <Menu MenuOpened={MenuOpened} setMenuOpened={setMenuOpened} />
      <Navbar />
      <Outlet />
    </div>
  )
}

export default BasicLayout