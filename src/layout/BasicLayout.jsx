import React from 'react'
import { Outlet } from 'react-router-dom'

const BasicLayout = () => {
  return (
    <div className='Layout'>
      <Outlet />
    </div>
  )
}

export default BasicLayout