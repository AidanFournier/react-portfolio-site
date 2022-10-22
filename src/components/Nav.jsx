import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { RiUser3Fill } from 'react-icons/ri'
import { FaBook } from 'react-icons/fa'
import { FaFolder } from 'react-icons/fa'
import { AiFillMessage } from 'react-icons/ai'

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiFillHome /></a>
      <a href="#about"><RiUser3Fill /></a>
      <a href="#experience"><FaBook /></a>
      <a href="#portfolio"><FaFolder /></a>
      <a href="#contact"><AiFillMessage /></a>
    </nav>
  )
}

export default Nav