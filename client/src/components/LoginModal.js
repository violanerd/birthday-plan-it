import React, { useState } from "react";
import "./ModalStyles.css";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

function Login({ handleModals }) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
      handleModals("login");
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">Login!</h3>
        <form onSubmit={handleFormSubmit} className="email-password-container">
          <div className="email-field">
            <label htmlFor="email" className="email-label">
              Email Address:
            </label>
            <input
              type="email"
              name="email"
              // placeholder="Your Email"
              className="email-password-input"
              value={formState.email}
              onChange={handleChange}
            />
          </div>

          <div className="password-field">
            <label htmlFor="password" className="password-label">
              Password:
            </label>
            <input
              type="password"
              name="password"
              // placeholder="********"
              className="email-password-input"
              value={formState.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="log-in-btn">Login!</button>
        </form>

        {error && <div style={{color: "black"}}>Login failed</div>}

        <div className="flex-row">
          <button
            type="button"
            className="sign-up-btn"
            onClick={() => handleModals("signup")}
          >
            Sign Up
          </button>
          <button
            type="button"
            className="close-button"
            onClick={() => handleModals("login")}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
export default Login;
