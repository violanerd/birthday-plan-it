import React from 'react';
import PartyForm from '../components/PartyForm'

import ThemeOneThumbnail from '../components/assets/theme01-thumbnail.jpg';

function Theme () {
    return (
        <div>
            <div className='theme-card'>
          <img className='theme-one' src={ThemeOneThumbnail} alt='balloon-theme'/>
          <PartyForm />
          <h3 className='theme-name'>Festive Balloons</h3>
        </div>
        </div>
    )
}

export default Theme;