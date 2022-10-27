import React from 'react';

import './PartyFormStyles.css';
import ThemeThree from './assets/theme03.jpg';

function PartyForm() {
    return (
        <div className='theme-container-form'>
            <div className='form-field-container'>
                <form className='form' onSubmit=''>
                    <img className='theme-three' src={ThemeThree} alt='dance-party-theme' />
                    <div className='input-fields'>
                        <p>You're invited to a party!</p>
                        <label htmlFor='name'></label>
                        <input type='text' name='name' placeholder='Your name goes here'/>
                        <p>Would like to invite you to her birthday party!</p>
                        <div>
                            <label htmlFor='host'>Who is hosting the party?</label>
                            <input type='text' name='host' />
                        </div>
                        <div>
                            <label htmlFor="date">Pick the party date:</label>
                            <input type='date' name='date' />
                        </div>
                        <div>
                            <label htmlFor='location'>Where will the party be?</label>
                            <input type='text' name='location' />
                        </div>
                        <div>
                            <textarea
                                placeholder="Describe the party..."
                                value=""
                                className=""
                                onChange=""
                                name="description"
                                max-length='5'
                            ></textarea>
                        </div>
                        <button className='' type='submit'>
                            Create My Invitation
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PartyForm;