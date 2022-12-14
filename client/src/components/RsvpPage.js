import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_PARTY } from "../utils/queries";
import { RSVP, DECLINE } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { dateFormat, parseTime } from "../utils/date";
import "./MyPartyPageStyles.css";
import "./RsvpPageStyles.css";
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

  var myData = {};
  var me = { email: "" };
  if (Auth.loggedIn()) {
    myData = Auth.getProfile();
    me = myData?.data || { email: "" };
  }

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
  let date = dateFormat(party.date);
  let time = parseTime(party.time);
  return (
    <div className="emailer-container">
      <div className="left-container">
        <div className="invitation">
          <img
            className="theme-three"
            src={renderPartyTheme}
            alt="dance-party-theme"
          />
          <div className="invitation-fields rsvp-invitation-fields">
            <div className="you-r-invited">YOU'RE INVITED!</div>
            <div className="data-area">{party.hostName}</div>
            <p className="label label-p">
              {" "}
              would like to invite you to their birthday party!
            </p>
            <div className="label">The party will be held at</div>
            <div className="location data-area data-text">{party.location}</div>
            <div className="label">The date of the party will be</div>
            <div className="date-time">
              <div className="date data-area data-text">{date}</div>
            </div>
            <div className="label">The party will start at</div>
            <div className="date-time">
              <div className="time data-area data-text">{time}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-container rsvp-rt-container">
        <div className="rsvp-content-container">
          <div className="rsvp-guests-container">
            <h1 className="guestlist-heading rsvp-heading">Sign up or login with your email address, then confirm or decline your RSVP invite:</h1>
            <div className="guests-list">
              <ul>
                {party.guests.map((guest) => (
                  <li className="rsvp-guest" key={guest}>
                    {/*
                    
                    }IF (You've RSVP'd) {
                        Show RSVP box
                    } ELSE IF( You Declined) {
                        Show Decline box
                    } ELSE IF (It's not your email) {
                        show nothing
                    } ELSE {
                        Show Buttons
                    }
                     */}
                    {party.rsvps.includes(guest) ? (
                      <span className="has-rsvpd">CONFIRMED</span>
                    ) : party.declines.includes(guest) ? (
                      <span className="has-declined">DECLINED</span>
                    ) : guest !== me.email ? (
                      <></>
                    ) : (
                      <>
                        <button className="rsvp-btn" onClick={handleRsvp}>
                          CONFIRM
                        </button>
                        <button className="decline-btn" onClick={handleDecline}>
                          DECLINE
                        </button>
                      </>
                    )}
                    {console.log(
                      "Guest",
                      guest,
                      party.declines.includes(guest)
                    )}
                    {guest}
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
