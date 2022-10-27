import React, { useState } from 'react';

function PartyForm () {
    const [partyFormState, setPartyFormState] = useState({ 
        name: '', 
        description: '',
        host: '', 
        date: '',
        location: '',
        guests: [],
        theme: 1 })//hardcoded this for now 
    const handleChange = (event) => {
        setPartyFormState({ ...partyFormState, [event.target.name]: event.target.value });
          };
    const handlePartyFormSubmit = (e) => {
        e.preventDefault();
        console.log(partyFormState);
        setPartyFormState({name: '', description: '', host: '', date: '', location: '', guests: [], theme: "" })
        // going to redirect to view invitation and invite guests
    }
    return (
        <form className="" onSubmit={handlePartyFormSubmit} style={{color: "black"}}>
            <div>
                <label htmlFor="name">Give this party a name!</label>
                <input type="text" name="name" placeholder="party name..." value={partyFormState.name} onChange={handleChange} />
            </div>
            <div>
                <textarea
                    placeholder="Describe the party..."
                    value={partyFormState.description} 
                    onChange={handleChange}
                    className=""
                    name="description"
                    ></textarea>
            </div>
            <div>
                <label htmlFor="host">Who is hosting the party?</label>
                <input type="text" name="host" value={partyFormState.host} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="date">Pick the party date:</label>
                <input type="date" name="date" value={partyFormState.date} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="location">Where will the party be?</label>
                <input type="text" name="location" value={partyFormState.location} onChange={handleChange}/>
            </div>
            <button className="" type="submit">
            Create My Invitation
            </button>
        </form>
    )
}

export default PartyForm;