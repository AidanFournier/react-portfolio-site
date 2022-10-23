import React from 'react'
import { useState } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { RiUser3Fill } from 'react-icons/ri'
import { FaBook } from 'react-icons/fa'
import { FaFolder } from 'react-icons/fa'
import { AiFillMessage } from 'react-icons/ai'


const Nav = () => {
  const [ activeNav, setActiveNav ] = useState('#home')

  return (
    <nav>
      <a href="#home"
        onClick={() => setActiveNav('#home')}
        className={activeNav === '#home' ? 'active' : ''}>
          <AiFillHome />
      </a>
      <a href="#about" 
        onClick={() => setActiveNav('#about')} 
        className={activeNav === '#about' ? 'active' : ''}>
          <RiUser3Fill />
      </a>
      <a href="#experience" 
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}>
          <FaBook />
      </a>
      <a href="#portfolio" 
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}>
          <FaFolder />
      </a>
      <a href="#contact" 
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}>
          <AiFillMessage />
      </a>
    </nav>
  )
}

export default Nav