import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/aidanfournier/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/AidanFournier" target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href="https://twitter.com/aidoufou" target="_blank" rel="noreferrer"><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials