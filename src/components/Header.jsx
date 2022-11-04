import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import MyPic from '../assets/Profile Pic - Transparent.png'
import HeaderBG from '../assets/header-bg.png'

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
      <img src={HeaderBG} alt="Header graphic" className="header__graphic"/>
        <h5>Hello I'm</h5>
        <h1>Aidan Fournier</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={MyPic} alt="Me" />
        </div>
      </div>
    </header>
  )
}

export default Header