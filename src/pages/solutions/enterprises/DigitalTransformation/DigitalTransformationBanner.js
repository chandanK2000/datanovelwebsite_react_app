import React from 'react';
import './DigitalTransformationBanner.css';
import { useNavigate } from 'react-router-dom';
const DigitalTransformationBanner = () => {

    const navigate=useNavigate();
    const ContactUs=()=>{
        navigate('/contactus');
    }

    return (
        <div className="digital-banner">
            <div className="banner-content">
                <h2>Transforming Data into Actionable Insights</h2>
                <h3>Unlock the power of your data with seamless <br/>cleansing, integration, and modernization.</h3>
                <button className="banner-button" onClick={ContactUs}>Contact Us</button>
            </div>
        </div>
    );
};

export default DigitalTransformationBanner;
