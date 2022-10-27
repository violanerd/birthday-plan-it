import React from "react";
import "./ModalStyles.css";
function Login({ handleModals }) {
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">Login!</h3>
        <div className='email-password-container'>
          <div className='email-field'>
            <label htmlFor="email" className='email-label'>Email Address:</label>
            <input type="email" name="email" className='email-password-input' />
          </div>
          <div className='password-field'>
            <label htmlFor="password" className='password-label'>Your Password:</label>
            <input type="password" name="password" className='email-password-input' />
          </div>
        </div>
        <div className="flex-row">
          <button type="button" className='signup-button' onClick={() => handleModals("signup")}>
            Sign Up
          </button>
          <button type="button" className='login-button' onClick={() => handleModals("login")}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
export default Login;
