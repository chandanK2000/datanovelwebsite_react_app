import React from 'react';
import './WhychoosePackage.css';
import chooseimage1 from '../../../../assets/images/chooseimage1.png';

const WhychoosePackage = () => {
  const items = [
    { img: chooseimage1, text: 'Strong partnerships with leading package providers' },
    { img: chooseimage1, text: 'Experienced implementation consultants' },
    { img: chooseimage1, text: 'Agile and scalable approach' },
    { img: chooseimage1, text: 'Focus on delivering measurable ROI' }
  ];

  return (
    <div className="why-choose-section container-fluid">
      <h2>Why Choose Us</h2>
      <div className="row g-2">
        {items.map((item, index) => (
          <div className="col-lg-3 col-md-6 col-12" key={index}>
            <div className="why-card">
              <img src={item.img} alt="why choose" className="why-card-img" />
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhychoosePackage;
