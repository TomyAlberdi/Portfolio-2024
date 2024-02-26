import React from 'react'
import { Link } from 'react-router-dom'

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
        <Link className='active'>Home</Link>
        <Link>Projects</Link>
        <Link>Experience</Link>
        <Link>Tech Stack</Link>
        <Link>Contact</Link>
      </nav>
    </div>
  )
}

export default Navbar