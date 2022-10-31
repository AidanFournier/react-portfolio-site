import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#header" className="footer__logo">Aidan</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Home</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/aidanfournier/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/AidanFournier" target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href="https://twitter.com/aidoufou" target="_blank" rel="noreferrer"><BsTwitter /></a> 
      </div>
      <div className="footer__copyright">
        <small>© Aidan Fournier 2022</small>
      </div>
    </footer>
  )
}

export default Footer