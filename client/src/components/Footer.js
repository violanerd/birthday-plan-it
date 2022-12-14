import React from 'react';

import './FooterStyles.css';
import { Link } from 'react-router-dom';
import Logo from './assets/birthday-plan-it-logo.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <Link to={'/'}>
          <div className='bpi-logo'>
            <img src={Logo} alt="logo" className='birthday-plan-it-logo' />
          </div>
        </Link>
        <p className='subhead'>This web application was coded and created by:</p> 
        <p className='credits'>Madalyne Cross, Joshua Haddix & Ron Dronet</p>
        <p className='copyright'>&copy; Copyright 2022</p>
      </div>
    </div>
  )
}

export default Footer;