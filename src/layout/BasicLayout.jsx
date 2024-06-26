import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './../components/Navbar/Navbar';

const BasicLayout = () => {

  return (
    <div className='Layout'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default BasicLayout