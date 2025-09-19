import React from 'react';
import './DamcoDifferentiators.css';

import partnerIcon from '../../../../assets/images/cloud/cloudDamcroimage1.png';
import experienceIcon from'../../../../assets/images/cloud/cloudDamcroimage2.png';
import trustIcon from '../../../../assets/images/cloud/cloudDamcroimage3.png';
import wideIcon from '../../../../assets/images/cloud/cloudDamcroimage5.png';
import certificed from '../../../../assets/images/cloud/cloudDamcroimage6.png';
import bestfit from '../../../../assets/images/cloud/cloudDamcroimage7.png';

const DamcoDifferentiators = () => {
  const differentiators = [
    {
      img: partnerIcon,
      title: "Strategic Partnerships",
      desc: "We have built strong strategic alliances with leading Cloud vendors including AWS, Microsoft Azure, and Google Cloud."
    },
    {
      img: experienceIcon,
      title: "Over Two Decades of Experience",
      desc: "27+ years of experience in delivering bespoke Cloud Consulting services to businesses across the globe."
    },
    {
      img: trustIcon,
      title: "Trusted Partner",
      desc: "We've successfully delivered Cloud consulting solutions to our global clients spanning 32+ countries."
    },
        {
      img: wideIcon,
      title: "Wide Technology Expertise",
      desc: "We have built strong strategic alliances with leading Cloud vendors including AWS, Microsoft Azure, and Google Cloud."
    },
    {
      img: bestfit,
      title: "Best-Fit Practices",
      desc: "A leading Cloud consulting company with unmatched expertise in Cloud Security, Database, Serverless architecture, Al, and ML."
    },
    {
      img: certificed,
      title: "Certified Technology Professionals",
      desc: "Backed by a qualified team of Cloud consulting services providers having rich expertise in unleashing the potential of the Cloud."
    }
  ];

  return (
    <div className="damco-differentiators-section">
      <h2 className="damco-section-title">Damco Differentiators</h2>
      <p className="section-subtitle">
        Partner with a Cloud Consulting Company to Maximize Your Cloud Investment
      </p>

      <div className="cards-container">
        {differentiators.map((item, index) => (
          <div className="differentiator-card" key={index}>
           <div className='card-contents'>
             <img src={item.img} alt={item.title} className="card-img" />
            <h3 className="card-title">{item.title}</h3>
            <p className="card-desc">{item.desc}</p>
           </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DamcoDifferentiators;
