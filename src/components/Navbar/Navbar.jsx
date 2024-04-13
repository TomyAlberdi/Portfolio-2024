import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <section className="header">
        <img src="public/favicon.ico" alt="Tomás Alberdi Icon" />
        <div>
          <h2>Tomás Alberdi</h2>
          <h4>FullStack Developer</h4>
        </div>
      </section>
      <nav>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={"/"}>Home</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={"/Experience"}>Experience</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={"/Projects"}>Projects</NavLink>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to={"/Contact"}>Contact</NavLink>
      </nav>
    </div>
  )
}

export default Navbar