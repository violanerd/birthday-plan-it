import React from "react";
// import EmailButton from "../components/EmailButton";
import Navbar from "../components/Navbar";
import RsvpPage from "../components/RsvpPage";
import Footer from "../components/Footer";

const Rsvp = () => {
  return (
    <div>
      <Navbar />
      <RsvpPage />
      {/* <div>
        MyParty
        <EmailButton />
      </div> */}
      <Footer />
    </div>
  );
};

export default Rsvp;
