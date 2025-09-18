import React from 'react';
import './CloudServiceBanner.css';

const CloudServiceBanner = () => {
  return (
    <div 
      className="cloudservice-banner-section">
      <div className="cloudservice-banner-overlay">
        <h1>Cloud Services</h1>
        <h2>
          Drive Business Agility and Resilience with <br/>Cloud Advisory, Roadmap, and Solutions
        </h2>
        <button className="cloudservices-learn-more">Learn More</button>
      </div>
    </div>
  );
};

export default CloudServiceBanner;
