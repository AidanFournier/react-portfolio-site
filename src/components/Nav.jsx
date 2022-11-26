import React from 'react'
import { useState, useEffect } from 'react'
import { SlHome } from 'react-icons/sl'
import { FiUser } from 'react-icons/fi'
import { BsCodeSlash } from 'react-icons/bs'
import { BsFolder2 } from 'react-icons/bs'
import { BiMessageDetail } from 'react-icons/bi'
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

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, [window.scrollY]);

  return (
    <nav>
      <div className={scrollNav ? "nav__md-lg nav__scroll" : "nav__md-lg"}>
        <a href="#home" className="nav__logo-link">
          <img src={Logo} alt="Brand logo" className="nav__logo"/>
        </a>
        
          <a href="#home"
            onClick={() => setActiveNav('#home')}
            className={activeNav === '#home' ? 'active nav__icon' : 'nav__icon'}>
              <SlHome />
          </a>
          <a href="#about" 
            onClick={() => setActiveNav('#about')} 
            className={activeNav === '#about' ? 'active nav__icon' : 'nav__icon'}>
              <FiUser />
          </a>
          <a href="#experience" 
            onClick={() => setActiveNav('#experience')}
            className={activeNav === '#experience' ? 'active nav__icon' : 'nav__icon'}>
              <BsCodeSlash />
          </a>
          <a href="#portfolio" 
            onClick={() => setActiveNav('#portfolio')}
            className={activeNav === '#portfolio' ? 'active nav__icon' : 'nav__icon'}>
              <BsFolder2 />
          </a>
          <a href="#contact" 
            onClick={() => setActiveNav('#contact')}
            className={activeNav === '#contact' ? 'active nav__icon' : 'nav__icon'}>
              <BiMessageDetail />
          </a>
      </div>




      <div className="nav__mobile">
        <a href="#home"
          onClick={() => setActiveNav('#home')}
          className={activeNav === '#home' ? 'active' : ''}>
            <SlHome />
        </a>
        <a href="#about" 
          onClick={() => setActiveNav('#about')} 
          className={activeNav === '#about' ? 'active' : ''}>
            <FiUser />
        </a>
        <a href="#experience" 
          onClick={() => setActiveNav('#experience')}
          className={activeNav === '#experience' ? 'active' : ''}>
            <BsCodeSlash />
        </a>
        <a href="#portfolio" 
          onClick={() => setActiveNav('#portfolio')}
          className={activeNav === '#portfolio' ? 'active' : ''}>
            <BsFolder2 />
        </a>
        <a href="#contact" 
          onClick={() => setActiveNav('#contact')}
          className={activeNav === '#contact' ? 'active' : ''}>
            <BiMessageDetail />
        </a>
      </div>
    </nav>
  )
}

export default Nav