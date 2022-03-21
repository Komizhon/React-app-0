import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

function Header() {
  return (
    <div className='container navbar'>
        <div className="left">
            <Link to="/"><img src={Logo} alt="" /></Link>
        </div>
        <div className="right">
          <Link className="nav_link" to="/">Business areas</Link>
          <Link className="nav_link" to="/images">Featured images</Link>
          <Link className="nav_link" to="/cage">Gear cage</Link>
          <Link className="nav_link" to="/contact">Contact</Link>
          <Link className="nav_link" to="/template">Get template</Link>
        </div>
    </div>
  )
}

export default Header