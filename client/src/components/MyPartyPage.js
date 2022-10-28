import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_PARTY } from '../utils/queries';

import './MyPartyPageStyles.css';
// import ThemeOne from "./assets/theme01.jpg";
// import ThemeTwo from "./assets/theme02.jpg";
import ThemeThree from './assets/theme03.jpg';
// import ThemeFour from "./assets/theme04.jpg";

const MyPartyPage = () => {
  const { id: partyId } = useParams();
  console.log(partyId);

  const {loading, data} = useQuery(QUERY_PARTY, {
    variables: {id: partyId}
  })

  const party = data?.party || {}
  if (loading) {
    return <div>Loading...</div>
  }
  console.log("party details", party)
  return (
    <div className='emailer-container'>
      <div className='left-container'>
        <img className='theme-three' src={ThemeThree} alt='dance-party-theme' />
        <p style={{color: "black"}}>{party.hostName} is the host of this party</p>
      </div>
      <div className='right-container'>
        <div className='content-container'>
          <h1 className='guestlist-heading'>Create your guest list:</h1>
          <div className='email-form'>
            <form>
              <label htmlFor='emailAddress'>Email address:</label>
              <input className='guest-name' type='text' name='hostName' value='' />
              <button className='invite-guest-btn' type='submit'>Invite Guest</button>
              <div className='invite-guests-container'>
                <hi className='guest-list-heading'>Guest list:</hi>
                <div className='guests-list'>
                  <p>Here is the list of guests you have invited:</p>
                </div>
              </div>
              <div className='messages-container'>
                <textarea
                  className='host-message'
                  placeholder="Message to guests here..."
                  rows='2'
                  maxlength='500'
                  name='message'
                  value=''
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyPartyPage;