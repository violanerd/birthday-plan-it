import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage2 from '../components/HeroImage2';

const Login = () => {
  return <div>
    <Navbar/>
    <HeroImage2 heading='Login' text='Please login to access your profile.'/>
    <Footer/>
  </div>
}

export default Login;