import React from "react";
import "./ModalStyles.css";
function Login({ handleModals }) {
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">Login!</h3>

        <label htmlFor="email">Email Address:</label>
        <input type="email" name="email" />

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" />

        <div className="flex-row">
          <button type="button" onClick={() => handleModals("signup")}>
            Sign Up
          </button>
          <button type="button" onClick={() => handleModals("login")}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
export default Login;
