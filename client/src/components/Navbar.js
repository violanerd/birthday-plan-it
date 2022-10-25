import './NavbarStyles.css';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './assets/birthday-plan-it-logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  // ACTIVATE SLIDE IN MENU BY 'click' STATE
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className='header'>
      <Link to={'/'}>
        <div className='logo-section'>
          <img src={Logo} alt="logo" className='birthday-plan-it-logo' />
        </div>
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/myparty'>My Party</Link>
        </li>
        <li>
          <Link to='/signup'>Sign Up</Link>
        </li>
        <li className='login-btn'>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
      {/* HAMBURGER MENU CONDITIONALS */}
      <div className='hamburger' onClick={handleClick}>
        {click ? (
          <FaTimes size={25} style={{ color: '#fff' }} />
        ) : (
          <FaBars size={25} style={{ color: '#ffffff' }} />
        )}
      </div>
    </div>
  )
}

export default Navbar;