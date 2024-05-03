import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './../components/Navbar/Navbar';
import MobileNavbar from './../mobile/Navbar/MobileNavbar';

const BasicLayout = () => {
  return (
    <div className='Layout'>
      <MobileNavbar />
      <Navbar />
      <Outlet />
    </div>
  )
}

export default BasicLayout