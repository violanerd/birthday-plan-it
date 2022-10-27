import "./HeroImageStyles.css";

import React, { useState } from "react";
import SignUp from "./SignUpModal";
import Login from "./LoginModal";
import HeroImg from "./assets/plan-it-bkgrd.png";
import ThemeOneThumbnail from "./assets/theme01-thumbnail.jpg";
import ThemeTwoThumbnail from "./assets/theme02-thumbnail.jpg";
import ThemeThreeThumbnail from "./assets/theme03-thumbnail.jpg";
import ThemeFourThumbnail from "./assets/theme04-thumbnail.jpg";
import { Link } from "react-router-dom";

const HeroImage = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  function handleModals(modal) {
    if (modal === "login") {
      setIsSignUpOpen(false);
      setIsLoginOpen(!isLoginOpen);
    }
    if (modal === "signup") {
      setIsLoginOpen(false);
      setIsSignUpOpen(!isSignUpOpen);
    }
  }


  return (
    <div className="hero">
      {isSignUpOpen && <SignUp handleModals={handleModals}></SignUp>}
      {isLoginOpen && <Login handleModals={handleModals}></Login>}
      <div className="image-container">
        <img
          className="background-watermark"
          alt="planet-background"
          src={HeroImg}
        />
      </div>
      <div className="content">
        <h1>Plan and personalize your birthday party!</h1>
        <p>
          Welcome to <span>Birthday Plan It</span> where we help you plan your
          birthday party by sending your guests a cool invitation. Simply sign
          up to create an account then pick a theme from the thumbnails below.
          Once you pick a theme you will fill out the form and submit it to
          generate an invitation link. Then you'll create an email list
          containing your guests emails that you want the invitation sent to. So
          let's get the party started!
        </p>
        <div className="buttons-container">
          <Link onClick={() => handleModals("signup")} className="signup-btn">
            Sign Up
          </Link>
          <Link onClick={() => handleModals("login")} className="login-btn">
            Login
          </Link>
        </div>
        <div className="theme-heading">
          <h2 className="theme-h2">Your choice of four themes!</h2>
          <p className="theme-subhead" id="subhead">
            Click on the CREATE INVITE button to create your invitation
          </p>
        </div>
        <div className="theme-container">
          <div className="theme-card">
            <img
              className="theme-one"
              src={ThemeOneThumbnail}
              alt="balloon-theme"
            />
            <h3 className="theme-name">Festive Balloons</h3>
            <Link to="/theme" className="select-btn" state={{partyTheme: 1}}>
              Create Invite
            </Link>
          </div>
          <div className="theme-card">
            <img
              className="theme-two"
              src={ThemeTwoThumbnail}
              alt="space-theme"
            />
            <h3 className="theme-name">Outer Space</h3>
            <Link to="/theme" className="select-btn" state={{partyTheme: 2}}>
              Create Invite
            </Link>
          </div>
          <div className="theme-card">
            <img
              className="theme-three"
              src={ThemeThreeThumbnail}
              alt="dance-theme"
            />
            <h3 className="theme-name">Dance Party</h3>
            <Link to="/theme" className="select-btn" state={{partyTheme: 3}}>
              Create Invite
            </Link>
          </div>
          <div className="theme-card">
            <img
              className="theme-four"
              src={ThemeFourThumbnail}
              alt="beat-box-theme"
            />
            <h3 className="theme-name">Beat Box</h3>
            <Link to="/theme" className="select-btn" state={{partyTheme: 4}}>
              Create Invite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
