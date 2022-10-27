import React from 'react';

function PartyForm () {
    return (
        <div className='form-container'>
        <form className="form" onSubmit="" style={{color: "black"}}>
            <div>
                <label htmlFor="name">Give this party a name!</label>
                <input type="text" name="name" />
            </div>
            <div>
                <textarea
                    placeholder="Describe the party..."
                    value=""
                    className=""
                    onChange=""
                    name="description"
                    ></textarea>
            </div>
            <div>
                <label htmlFor="host">Who is hosting the party?</label>
                <input type="text" name="host" />
            </div>
            <div>
                <label htmlFor="date">Pick the party date:</label>
                <input type="date" name="date" />
            </div>
            <div>
                <label htmlFor="location">Where will the party be?</label>
                <input type="text" name="location" />
            </div>
            <button className="" type="submit">
            Create My Invitation
            </button>
        </form>
        </div>
    )
}

export default PartyForm;