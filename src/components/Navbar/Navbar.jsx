import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul className='navigation-bar'>
        <li className='navigation-button'><NavLink to='/'>{"<"}Home{">"}</NavLink></li>
        <li className='navigation-button'><NavLink to='/projects'>{"<"}Projects{">"}</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar