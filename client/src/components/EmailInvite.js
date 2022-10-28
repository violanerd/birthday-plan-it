import React from 'react';

import './EmailInviteStyles.css';
// import ThemeOne from "./assets/theme01.jpg";
// import ThemeTwo from "./assets/theme02.jpg";
import ThemeThree from './assets/theme03.jpg';
// import ThemeFour from "./assets/theme04.jpg";

const EmailInvite = () => {
  
  return (
    <div className='emailer-container'>
        <div className='left-container'>
        <img className='theme-three' src={ThemeThree} alt='dance-party-theme' />
        </div>
        <div className='right-container'>

        </div>
    </div>
  )
}

export default EmailInvite;