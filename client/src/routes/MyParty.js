import React from "react";
// import EmailButton from "../components/EmailButton";
import Navbar from "../components/Navbar";
import MyPartyPage from "../components/MyPartyPage";
import Footer from "../components/Footer";

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
