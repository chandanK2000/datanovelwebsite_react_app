import React from 'react';
import './PackageImplementConnect.css';
import { useNavigate } from 'react-router-dom';

const PackageImplementConnect = () => {
    const navigate = useNavigate();
    const ContactUs = () => {
        navigate('/contactus');
    }
    return (
        <div className="package-implement-connect-section">
            {/* Left Section */}
            <div className="package-implement-text">
                <h2>
                    Implement the right<br /> package, the right way — <br />
                    Connect with us today!
                </h2>
                <div className='pills'>
                </div>
            </div>

            <div className='right-section'>
                <button className='packagage-connect-contactus' onClick={ContactUs}>Contact Us</button>
            </div>

            {/* Right Section (Login Form) */}
            {/* <div className="package-implement-login">
        <h3 className="login-title">Member Login</h3>
        <form className="login-form">
          <input
            type="text"
            placeholder="ENTER USERNAME"
            className="login-input"
          />
          <input
            type="password"
            placeholder="ENTER PASSWORD"
            className="login-input"
          />

          <div className="login-actions">
            <button type="submit" className="login-btn">
              Login
            </button>
             <div className="login-links">
              <label className="radio-option">
                <input type="radio" name="loginOption" value="premier" />
                Premier
              </label>
              <label className="radio-option">
                <input type="radio" name="loginOption" value="forgot" />
                Forgot Password?
              </label>
            </div>
          </div>
        </form>
      </div> */}
        </div>
    );
};

export default PackageImplementConnect;
