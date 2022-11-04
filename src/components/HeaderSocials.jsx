import React from 'react'
import { RiLinkedinLine } from 'react-icons/ri'
import { FiGithub } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/aidanfournier/" target="_blank" rel="noreferrer"><RiLinkedinLine /></a>
        <a href="https://github.com/AidanFournier" target="_blank" rel="noreferrer"><FiGithub /></a>
        <a href="https://twitter.com/aidoufou" target="_blank" rel="noreferrer"><FiTwitter /></a>
    </div>
  )
}

export default HeaderSocials