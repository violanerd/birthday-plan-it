import React from 'react';
import EmailButton from '../components/EmailButton';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MyParty = () => {
  return <div>
    <Navbar />
    <Footer />
    <div>MyParty
      <EmailButton />
    </div>
  </div>
}

export default MyParty;