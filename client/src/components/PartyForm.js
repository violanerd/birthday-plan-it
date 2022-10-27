import React from 'react';

import './PartyFormStyles.css';
import ThemeThree from './assets/theme03.jpg';

function PartyForm() {
    return (
        <div className='background-container'>
            <div className='theme-container-form'>
                <div className='form-field-container'>
                    <form className='form' onSubmit=''>
                        <img className='theme-three' src={ThemeThree} alt='dance-party-theme' />
                        <div className='input-fields'>
                            <label className='you-r-invited' htmlFor='name'>YOU'RE INVITED!</label>
                            <input className='host-name' type='text' name='name' placeholder='Your name' />
                            <p className='label label-p' >would like to invite you to their birthday party!</p>
                            <label className='label' htmlFor='location'>The party will be held at</label>
                            <textarea placeholder="Party address"
                                className="location"
                                rows='2'
                                maxlength='100'
                                name='location'>
                                </textarea>
                            <label className='label' htmlFor="date">The date of the party will be</label>
                            <div className='date-time'>
                            <input className='date' type='date' name='date' />
                            </div>
                            <label className='label' htmlFor='time'>The party will start at</label>
                            <div className='date-time'>
                            <input className='time' type='time' name='time' />
                            </div>
                            <button className='create-invite-btn' type='submit'>
                                Create Invitation
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PartyForm;