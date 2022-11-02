import React from 'react'
import { useState, useEffect } from 'react'
import { AiFillHome } from 'react-icons/ai'
import { RiUser3Fill } from 'react-icons/ri'
import { FaBook } from 'react-icons/fa'
import { FaFolder } from 'react-icons/fa'
import { AiFillMessage } from 'react-icons/ai'
import Logo from '../assets/af-logo.png'


const Nav = () => {
  const [ activeNav, setActiveNav ] = useState('#home')
  const [ scrollNav, setScrollNav ] = useState(false)

  const changeBackground = () => {
    if(window.scrollY >= 70) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }
  
  return (
    <nav>
      <div className={scrollNav ? "nav__md-lg nav__scroll" : "nav__md-lg"}>
        <img src={Logo} alt="Brand logo" className="nav__logo"/>
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
      </div>




      <div className="nav__mobile">
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
      </div>
    </nav>
  )
}

export default Nav