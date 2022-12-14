import React, { useState } from "react";
import "./ModalStyles.css";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

function SignUp({ handleModals }) {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">Sign Up!</h3>

        <form onSubmit={handleFormSubmit} className="email-password-container">
          <div className="username-field">
            <label htmlFor="username" className="username-label">
              Username:
            </label>
            <input
              type="text"
              name="username"
              // placeholder="Your Username"
              className="email-password-input"
              value={formState.username}
              onChange={handleChange}
            />
          </div>
          <div className="email-field">
            <label htmlFor="email" className="email-label">
              Email:
            </label>
            <input
              type="email"
              name="email"
              className="email-password-input"
              value={formState.email}
              onChange={handleChange}
            />
          </div>
          {/* ================================ */}
          <div className="password-field">
            <label htmlFor="password" className="password-label">
              Password:
            </label>
            <input
              type="password"
              name="password"
              className="email-password-input"
              value={formState.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="signup-button">
            Sign Up!
          </button>
        </form>

        {error && <div style={{ color: "black" }}>Sign Up Failed</div>}

        <div className="flex-row">
          <button
            type="button"
            className="login-button"
            onClick={() => handleModals("login")}
          >
            Login
          </button>
          <button
            type="button"
            className="close-button"
            onClick={() => handleModals("signup")}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
