import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import Logo from './../../assets/logo.png'
import './navbar.css'
export default function navbar() {
  return (
    <nav className='navbar '>
      <div className="wrapper">
      <Link to="/" className=""><img src={Logo} alt='Logo' className='logo'/></Link>
      <button className='button-1'><NavLink to="/" className="text-btn1">Favourites</NavLink></button>
     </div>
    </nav>

  )
  }
