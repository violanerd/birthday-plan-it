import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage2 from '../components/HeroImage2';

const Signup = () => {
  return <div>
    <Navbar />
    <HeroImage2 heading='Sign Up' text='Please sign up to create an account.' />
    <Footer />
  </div>
}

export default Signup;