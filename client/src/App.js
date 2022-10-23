import React from 'react';
import './index.css';
import Home from './routes/Home';
import MyParty from './routes/MyParty';
import Signup from './routes/Signup';
import Login from './routes/Login';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/myparty' element={<MyParty />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
