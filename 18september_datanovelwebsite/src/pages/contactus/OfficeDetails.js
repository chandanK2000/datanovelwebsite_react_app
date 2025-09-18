import React from 'react';
import './OfficeDetails.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaWhatsapp, FaTwitter, FaTelegram } from "react-icons/fa";
import contactgirl from '../../assets/images/contactgirl.png';

const OfficeDetails = () => {
    return (
        <section className="office-details">
            <div className="office-container">

                {/* Left Image with curved background */}
                <div className="office-image">
                    <img src={contactgirl} alt="office" />
                </div>

                {/* Right Info */}
                <div className="office-info">
                    {/* <div className="office-box">
                        <h3 className="office-title">Head Office:</h3>
                        <p><FaPhoneAlt className="icon" /> +447473997191</p>
                        <p><FaEnvelope className="icon" /> sybexdesigns@gmail.com</p>
                        <p><FaMapMarkerAlt className="icon" /> 2068 Boulevard Henri-Bourassa Est</p>
                    </div> */}

                    <div className="office-box">
                        <h3 className="office-title">Office Address </h3>
                        <p><FaPhoneAlt className="icon" /> +447473997191</p>
                        <p><FaEnvelope className="icon" /> sybexdesigns@gmail.com</p>
                        <p><FaMapMarkerAlt className="icon" />  Novel MSR Building, Subbaiah Reddy<br/> Colony, Marathahalli Village, Marathahalli, <br/>Bengaluru, Karnataka 560037</p>
                        <p>
                            <ul className="social-list">
                                <li><FaInstagram className="icon" /> </li>
                                <li><FaWhatsapp className="icon" /> </li>
                                <li><FaTwitter className="icon" /> </li>
                                <li><FaTelegram className="icon" /> </li>
                            </ul>

                        </p>
                    </div>
                </div>
            </div>

            


        </section>

    );
};

export default OfficeDetails;
