import "./NavbarStyles.css";
import SignUp from "./SignUpModal";
import Login from "./LoginModal";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/birthday-plan-it-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import Auth from "../utils/auth";
import { useLazyQuery } from "@apollo/client";
import { QUERY_USER_PARTY } from "../utils/queries";

const Navbar = () => {
  // ACTIVATE SLIDE IN MENU BY 'click' STATE
  function logout(event) {
    event.preventDefault();
    Auth.logout();
  }
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [getParty, { loading, error, data }] = useLazyQuery(QUERY_USER_PARTY);

  async function linkToParty() {
    const myParty = await getParty({
      variables: { username: Auth.getProfile().data.username },
    });
    const myPartyId = myParty.data.user.party?._id || false;
    if (myPartyId) {
      window.location.assign(`/rsvp/${myPartyId}`);
    } else {
      alert("Please create a party first");
    }
  }

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
    <div className="header">
      {isSignUpOpen && <SignUp handleModals={handleModals}></SignUp>}
      {isLoginOpen && <Login handleModals={handleModals}></Login>}
      <Link to={"/"}>
        <div className="logo-section">
          <img src={Logo} alt="logo" className="birthday-plan-it-logo" />
        </div>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>

        {Auth.loggedIn() ? (
          <>
            <li>{<Link onClick={linkToParty}>My Party</Link>}</li>
            <li className="login-btn">
              <Link onClick={logout}>Logout</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link onClick={() => handleModals("signup")}> Sign Up</Link>
            </li>
            <li className="login-btn">
              <Link onClick={() => handleModals("login")}>Login</Link>
            </li>
          </>
        )}
      </ul>
      {/* HAMBURGER MENU CONDITIONALS */}
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={25} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={25} style={{ color: "#ffffff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
