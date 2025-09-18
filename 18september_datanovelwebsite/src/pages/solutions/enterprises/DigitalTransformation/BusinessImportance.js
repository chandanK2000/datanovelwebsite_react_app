import React from 'react';
import './BusinessImportance.css';
import businessimage from '../../../../assets/images/businessimages.png';
const BusinessImportance = () => {
  return (
    <div className='business-importance d-flex align-items-center justify-content-center'>
      <div className='business-importance__img'>
        <img src={businessimage} alt='Business Importance' />
      </div>
      <div className='business-importance__content'>
        <h2>Why it’s important for businesses</h2>
        <p>Lorem ipsum dolor sit amet. Clita hendrerit nibh eirmod et consequat. Ipsum facilisis erat. Lorem ipsum dolor sit amet. Clita hendrerit nibh eirmod et consequat. Ipsum facilisis erat.</p>
      </div>
    </div>
  );
};

export default BusinessImportance;
