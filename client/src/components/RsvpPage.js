import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_PARTY } from "../utils/queries";
import { RSVP, DECLINE } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";

import "./MyPartyPageStyles.css";
import ThemeOne from "./assets/theme01.jpg";
import ThemeTwo from "./assets/theme02.jpg";
import ThemeThree from "./assets/theme03.jpg";
import ThemeFour from "./assets/theme04.jpg";
import backgroundOne from "./assets/theme-1-background.png";
import backgroundTwo from "./assets/theme-2-background.png";
import backgroundThree from "./assets/theme-3-background.png";
import backgroundFour from "./assets/theme-4-background.png";

const RsvpPage = () => {
  const { id: partyId } = useParams();

  const { loading, data } = useQuery(QUERY_PARTY, {
    variables: { id: partyId },
  });
  const party = data?.partyById || {};

  const myData = Auth.getProfile();
  const me = myData?.data || {};

  console.log("me", me);
  console.log("party details", party);

  const [rsvp, { error }] = useMutation(RSVP);
  const [decline, { declineErr }] = useMutation(DECLINE);

  async function handleRsvp(event) {
    if (true) {
      try {
        await rsvp({
          variables: { partyId: party._id },
        });
      } catch (e) {
        console.error(e);
      }
    }
  }

  async function handleDecline(event) {
    if (true) {
      try {
        await decline({
          variables: { partyId: party._id },
        });
      } catch (e) {
        console.error(e);
      }
    }
  }

  const [renderPartyTheme, setRenderPartyTheme] = useState(ThemeOne);

  useEffect(() => {
    if (party.theme === 2) {
      document.body.style.backgroundImage = `url(${backgroundTwo})`;
      setRenderPartyTheme(ThemeTwo);
    } else if (party.theme === 3) {
      document.body.style.backgroundImage = `url(${backgroundThree})`;
      setRenderPartyTheme(ThemeThree);
    } else if (party.theme === 4) {
      document.body.style.backgroundImage = `url(${backgroundFour})`;
      setRenderPartyTheme(ThemeFour);
    } else {
      setRenderPartyTheme(ThemeOne);
      document.body.style.backgroundImage = `url(${backgroundOne})`;
    }
  }, [party.theme]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="emailer-container">
      <div className="left-container">
        <img
          className="theme-three"
          src={renderPartyTheme}
          alt="dance-party-theme"
        />
        <p style={{ color: "black" }}>
          {party.hostName} is the host of this party
        </p>
      </div>
      <div className="right-container">
        <div className="content-container">
          <div className="invite-guests-container">
            <h1 className="guest-list-heading">Guest list:</h1>
            <div className="guests-list">
              <ul>
                {party.guests.map((guest) => (
                  <li className="guest" key={guest}>
                    {guest}
                    {/*
                    IF (It's not your email) {
                        show nothing
                    }ELSE IF (You've RSVP'd) {
                        Show RSVP box
                    } ELSE IF( You Declined) {
                        Show Decline box
                    } ELSE {
                        Show Buttons
                    }
                     */}
                    {guest !== me.email ? (
                      <></>
                    ) : party.rsvps.includes(me.email) ? (
                      <span className="has-rsvpd">RSVP'd!</span>
                    ) : party.declines.includes(me.email) ? (
                      <span className="has-declined">Declined</span>
                    ) : (
                      <>
                        <button className="rsvp" onClick={handleRsvp}>
                          RSVP
                        </button>
                        <button className="decline" onClick={handleDecline}>
                          Decline
                        </button>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="messages-container">
            <p className="host-message">{party.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RsvpPage;
