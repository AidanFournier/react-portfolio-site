import React from 'react'
import { RiLinkedinLine } from 'react-icons/ri'
import { FiGithub } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import Logo from '../assets/af-logo.png'


const Footer = () => {
  return (
    <footer>
      <a href="#header" className="footer__logo-link">
        <img src={Logo} alt="Brand logo" className="footer__logo"/>
      </a>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/aidanfournier/" target="_blank" rel="noreferrer"><RiLinkedinLine /></a>
        <a href="https://github.com/AidanFournier" target="_blank" rel="noreferrer"><FiGithub /></a>
        <a href="https://twitter.com/aidoufou" target="_blank" rel="noreferrer"><FiTwitter /></a> 
      </div>
      <div className="footer__copyright">
        <small>© Aidan Fournier 2022</small>
      </div>
    </footer>
  )
}

export default Footer