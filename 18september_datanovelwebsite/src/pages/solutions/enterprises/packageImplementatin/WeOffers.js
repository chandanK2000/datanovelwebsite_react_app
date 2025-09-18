import React from 'react';
import './WeOffers.css';
import offers1 from '../../../../assets/icons/offers1.png';
import offers2 from '../../../../assets/icons/offers2.png';
import offers3 from '../../../../assets/icons/offers3.png';
import offers4 from '../../../../assets/icons/offers4.png';

const offers = [
  {
    id: 1,
    img: offers1,
    title: 'ERP & CRM Implementation',
    desc: 'Deploy leading business applications like SAP, Oracle, Salesforce, or Microsoft Dynamics.'
  },
  {
    id: 2,
    img: offers2,
    title: 'Customization & Configuration',
    desc: 'Deploy leading business applications like SAP, Oracle, Salesforce, or Microsoft Dynamics.'
  },
  {
    id: 3,
    img: offers3,
    title: 'Integration Services',
    desc: 'Deploy leading business applications like SAP, Oracle, Salesforce, or Microsoft Dynamics.'
  },
  {
    id: 4,
    img: offers4,
    title: 'Support & Upgrades',
    desc: 'Deploy leading business applications like SAP, Oracle, Salesforce, or Microsoft Dynamics.'
  },
];

const WeOffers = () => {
  return (
    <div className='weoffers-container'>
      <h2>What We Offer</h2>
      <div className='weoffers-content'>
        {offers.map(({ id, img, title, desc }) => (
          <div className='weoffers-item' key={id}>
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeOffers;
