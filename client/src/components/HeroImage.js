import './HeroImageStyles.css';

import React from 'react';

import HeroImg from './assets/plan-it-bkgrd.png';
import { Link } from 'react-router-dom';

const HeroImage = () => {
  return <div className="hero">
    <div className='image-container'>
      <img className='background-watermark' alt='planet-background' src={HeroImg} />
    </div>
    <div className='content'>
      <h1>Plan and personalize your birthday party!</h1>
      <p>Here at <span>Birthday Plan It</span> we help you plan your birthday party by sending your guests a cool invitation. Simply sign up to create an account then pick a theme from the thumbnails below. Once you pick a theme you will fill out the form and submit it to generate the invitation. You'll also create a list of email addresses you want the invitation sent to. So let's get the party started!</p>
      <div className='buttons-container'>
        <Link to='/signup' className='signup-btn'>Sign Up</Link>
        <Link to='/login' className='login-btn'>Login</Link>
      </div>
    </div>
  </div>
}

export default HeroImage;