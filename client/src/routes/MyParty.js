import React from "react";
import EmailButton from "../components/EmailButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MyPartyPage from '../components/MyPartyPage';

const MyParty = () => {
  return (
    <div>
      <Navbar />
      <MyPartyPage />
      {/* <div>
        MyParty
        <EmailButton />
      </div> */}
      <Footer />
    </div>
  );
};


export default MyParty;
