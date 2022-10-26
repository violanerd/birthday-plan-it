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
      <p>Welcome to <span>Birthday Plan It</span> where we help you plan your birthday party by sending your guests a cool invitation. Simply sign up to create an account then pick a theme from the thumbnails below. Once you pick a theme you will fill out the form and submit it to generate an invitation link. Then you'll create an email list containing your guests emails that you want the invitation sent to. So let's get the party started!</p>
      <div className='buttons-container'>
        <Link to='/signup' className='signup-btn'>Sign Up</Link>
        <Link to='/login' className='login-btn'>Login</Link>
      </div>
      <div className='theme-heading'>
        <h2 className='theme-h2'>Your choice of four themes!</h2>
        <p className='theme-subhead'>Click on the thme of your choice to create your invitation</p>
      </div>
      <div className='theme-container'>

      </div>
    </div>
  </div>
}

export default HeroImage;