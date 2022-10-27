import React from "react";
import "./ModalStyles.css";
function SignUp({ handleModals }) {
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">Sign Up!</h3>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" />

        <label htmlFor="email">Email Address:</label>
        <input type="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" />

        <div className="flex-row">
          <button type="button" onClick={() => handleModals("signup")}>
            Close
          </button>
          <button type="button" onClick={() => handleModals("login")}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
