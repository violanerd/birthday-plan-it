import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useLazyQuery } from "@apollo/client";
import { QUERY_PARTY, EMAIL_GUESTS } from "../utils/queries";
import { ADD_GUEST, ADD_DESCRIPTION } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import "./MyPartyPageStyles.css";
import ThemeOne from "./assets/theme01.jpg";
import ThemeTwo from "./assets/theme02.jpg";
import ThemeThree from "./assets/theme03.jpg";
import ThemeFour from "./assets/theme04.jpg";
import backgroundOne from "./assets/theme-1-background.png";
import backgroundTwo from "./assets/theme-2-background.png";
import backgroundThree from "./assets/theme-3-background.png";
import backgroundFour from "./assets/theme-4-background.png";
import { dateFormat, parseTime } from "../utils/date";
import { Link } from "react-router-dom";


const MyPartyPage = () => {
  const { id: partyId } = useParams();
 // console.log(partyId);

  const { loading, data } = useQuery(QUERY_PARTY, {
    variables: { id: partyId },
  });

  const [addGuest, { error }] = useMutation(ADD_GUEST);
  const [addDescription, { descErr }] = useMutation(ADD_DESCRIPTION);

  const party = data?.partyById || {};

  const [dupeState, setDupeState] = useState(false);
  const [formState, setFormState] = useState({ email: "" });
  const [descState, setDescState] = useState({
    description: party.description,
  });

  const handleGuestChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setDupeState(false);
    console.log(party.guests.includes(formState.email));
    if (party.guests.includes(formState.email)) {
      setDupeState(true);
      return;
    } else {
      try {
        await addGuest({
          variables: { ...formState, partyId: party._id },
        });
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleDescForm = async (event) => {
    const { name, value } = event.target;

    setDescState({
      ...descState,
      [name]: value,
    });
  };

  const updateDesc = async (event) => {
    try {
      await addDescription({
        variables: { ...descState, partyId: party._id },
      });
    } catch (e) {
      console.error(e);
    }
  };
  

  const [sendEmail, { error: emailError, data: emailData}] = useLazyQuery(EMAIL_GUESTS)
  useEffect(() => {
      if (emailData) {
          console.log("data here", emailData)
          // alert("Email's sent successfully")
          // window.location.assign(`/rsvp/${partyId}`)
        
      } else {
        console.log("Error", emailError)
      }
    }, [emailData, emailError]);

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
  //console.log("party details", party);
  let date = dateFormat(party.date)
  let time = parseTime(party.time)
  
  return (
    <div className="emailer-container">
      <div className="left-container">
        <div className='invitation'>
          <img className='theme-three' src={renderPartyTheme} alt='dance-party-theme' />
          <div className='invitation-fields'>
              <div className='you-r-invited'>YOU'RE INVITED!</div>
              <div className='data-area'>{party.hostName}</div>
              <p className='label label-p' > would like to invite you to their birthday party!</p>
              <div className='label'>The party will be held at</div>
              <div className="location data-area data-text">{party.location}</div>
              <div className='label'>The date of the party will be</div>
              <div className='date-time'>
                <div className='date data-area data-text'>{date}</div>
              </div>
              <div className='label'>The party will start at</div>
              <div className='date-time'>
                <div className='time data-area data-text'>{time}</div>
              </div>
          </div>
        </div>
      </div>
      <div className="right-container center">
        {/* <div className="content-container"> */}
          <h1 className="guestlist-heading">Write a message to guests:</h1>
          <div className="messages-container">
                <textarea
                  className="host-message data-area"
                  placeholder="Message to guests here..."
                  rows="2"
                  maxLength="500"
                  name="description"
                  value={descState.description}
                  onChange={handleDescForm}
                  onBlur={updateDesc}
                ></textarea>
          </div>
          <h1 className="guestlist-heading">Guest List</h1>
          <div className="email-form">
          {/* <h1 className="guestlist-heading">Create your guest list:</h1> */}
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="email black">Enter an Email address:</label>
              <input
                className="guest-name"
                type="text"
                name="email"
                value={formState.email}
                onChange={handleGuestChange}
              />
              <button className="invite-guest-btn" type="submit">
                Invite Guest
              </button>
            </form>
            {error && <div style={{ color: "red" }}>Something went wrong.</div>}
            {dupeState && (
              <div style={{ color: "red" }} /* Because i was told to */>
                This guest was already invited.
              </div>
            )}
            <form>
              <div className="invite-guests-container">
                {/* <h1 className="guest-list-heading">Guest list:</h1> */}
                <div className="guests-list">
                  <p>Here is the list of guests you have invited:</p>
                  <ul>
                    {party.guests.map((guest) => (
                      <li className="guest" key={guest}>
                        {guest}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </form>
          </div>
          <div>
            <button className="send-email" onClick={() => sendEmail({ variables: {id : partyId }})}>Email my invite!</button>
            {emailError && <div style={{color: "red"}}>Uh, oh. Something went worng. Do you have guests on your list?</div>}
        </div>
        </div>
      </div>
    // </div>
  );
};

export default MyPartyPage;
