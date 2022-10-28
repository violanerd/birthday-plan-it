import React, { useEffect, useState } from 'react';
import './PartyFormStyles.css';
import { useMutation } from "@apollo/client";
import { ADD_PARTY } from "../utils/mutations";
import ThemeOne from "./assets/theme01.jpg"
import ThemeTwo from "./assets/theme02.jpg"
import ThemeThree from './assets/theme03.jpg';
import ThemeFour from "./assets/theme04.jpg"

function PartyForm({partyTheme}) {

    const [addParty, { error }] = useMutation(ADD_PARTY);
    

    const [partyFormState, setPartyFormState] = useState({ 
        hostName: '', 
        description: '',
        date: '',
        location: '',
        time: '',
        guests: [],
        theme: partyTheme })
    
    const [renderPartyTheme, setRenderPartyTheme] = useState(ThemeOne)
    useEffect(()=> {
        if (partyTheme === 2){
            setRenderPartyTheme(ThemeTwo)
        } else if (partyTheme === 3){
            setRenderPartyTheme(ThemeThree)
        } else if (partyTheme === 4){
            setRenderPartyTheme(ThemeFour)
        } else
        setRenderPartyTheme(ThemeOne)
    }, [partyTheme]) 
    const handleChange = (event) => {
        setPartyFormState({ ...partyFormState, [event.target.name]: event.target.value });
          };
    const handlePartyFormSubmit = async (e) => {
        e.preventDefault();
        console.log(partyFormState);
        let partyId;
        try {
            const { data }= await addParty({
              variables: { ...partyFormState },
            });
            partyId = data.addParty._id
          } catch (e) {
            console.error(e)
            console.log(error);
          }
  
        setPartyFormState({hostName: '', description: '', date: '', time: '', location: '', guests: [], theme: "" })
        // await party creation 
        window.location.assign(`/myparty/${partyId}`)
        // use id in params
        // going to redirect to view invitation and invite guests
        //myparty with party id
    }
    return (
        <div className='background-container'>
            <div className='theme-container-form'>
                <div className='form-field-container'>
                    <form className='form' onSubmit={handlePartyFormSubmit}>
                        <img className='theme-three' src={renderPartyTheme} alt='dance-party-theme' />
                        <div className='input-fields'>
                            <label className='you-r-invited' htmlFor='hostName'>YOU'RE INVITED!</label>
                            <input className='host-name' type='text' name='hostName' placeholder='Your name' value={partyFormState.hostName} onChange={handleChange}/>
                            <p className='label label-p' >would like to invite you to their birthday party!</p>
                            <label className='label' htmlFor='location'>The party will be held at</label>
                            <textarea placeholder="Party address"
                                className="location"
                                rows='2'
                                maxlength='100'
                                name='location'
                                value={partyFormState.location} 
                                onChange={handleChange}
                                ></textarea>
                            <label className='label' htmlFor="date">The date of the party will be</label>
                            <div className='date-time'>
                            <input className='date' type='date' name='date' value={partyFormState.date} onChange={handleChange}/>
                            </div>
                            <label className='label' htmlFor='time'>The party will start at</label>
                            <div className='date-time'>
                            <input className='time' type='time' name='time' value={partyFormState.time} onChange={handleChange}/>
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