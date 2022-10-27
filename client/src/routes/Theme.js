import React from 'react';
import { useLocation } from 'react-router-dom';
import PartyForm from '../components/PartyForm';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Theme() {
    const location = useLocation()
    const { partyTheme } = location.state
    console.log(partyTheme)
    
    return (
        <div>
            <Navbar />
            <PartyForm partyTheme={partyTheme}/>
            <Footer />
        </div>
    )
}

export default Theme;