import './Navbar.css'

import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <div className='header'>
      <Link to='/'>
        <h2>Portfolio</h2>
      </Link>
      {/* <div className={click ? "nav-menu active" : "nav-menu"}> */}
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to='/'>Home </Link>
        </li>
        <li>
          <Link to='/about'>About </Link>
        </li>
        <li>
          <Link to='/portfolio'>Portfolio </Link>
        </li>
        <li>
          <Link to='/contact'>Contact </Link>
        </li>

      </ul>

      {/* </div> */}
      <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{ color: "#000" }} />) : (<FaBars size={20} style={{ color: "#000" }} />)}

      </div>
      <div className='bt'>
        {/* <div className='content1'><Link to='/hire' className='btn'>Hire Me</Link></div> */}
      </div>
    </div>
  )
}

export default Navbar
