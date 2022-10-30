import React, { useEffect, useState } from 'react';
import './PartyFormStyles.css';
import { useMutation } from "@apollo/client";
import { ADD_PARTY } from "../utils/mutations";
import ThemeOne from "./assets/theme01.jpg";
import ThemeTwo from "./assets/theme02.jpg";
import ThemeThree from './assets/theme03.jpg';
import ThemeFour from "./assets/theme04.jpg";
import backgroundOne from "./assets/theme-1-background.png"
import backgroundTwo from "./assets/theme-2-background.png"
import backgroundThree from "./assets/theme-3-background.png"
import backgroundFour from "./assets/theme-4-background.png"

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
            document.body.style.backgroundImage = `url(${backgroundTwo})`
            setRenderPartyTheme(ThemeTwo)
        } else if (partyTheme === 3){
            document.body.style.backgroundImage = `url(${backgroundThree})`
            setRenderPartyTheme(ThemeThree)
        } else if (partyTheme === 4){
            document.body.style.backgroundImage = `url(${backgroundFour})`
            setRenderPartyTheme(ThemeFour)
        } else {
            setRenderPartyTheme(ThemeOne)
            document.body.style.backgroundImage = `url(${backgroundOne})`
        }
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
            console.log("data", data)
          } catch (e) {
            console.error(e)
            console.log(error);
          }
  
        setPartyFormState({hostName: '', description: '', date: '', time: '', location: '', guests: [], theme: "" })
        window.location.assign(`/myparty/${partyId}`)
        
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