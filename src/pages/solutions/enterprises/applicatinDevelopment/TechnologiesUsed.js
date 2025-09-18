import React from 'react'
import './TechnologiesUsed.css'
import programming from '../../../../assets/images/programming.png';
import mobile from '../../../../assets/images/mobile.png';
import cloud from '../../../../assets/images/cloud.png';
import programming1 from '../../../../assets/images/programming.png';

const TechnologiesUsed = () => {
  return (
    <div className='technologies-used-container'>
        <h3><span>Technologies We Use</span> Technologies We Use</h3>
        <div className='technologies-used-grid'>
            <div className='tech-card'>
                <img src={programming1} alt='Programming'/>
                <p>Programming:</p>
            </div>
            <div className='tech-card'>
                <img src={mobile} alt='Mobile'/>
                <p>Mobile:</p>
            </div>
            <div className='tech-card'>
                <img src={cloud} alt='Cloud'/>
                <p>Cloud:</p>
            </div>
            <div className='tech-card'>
                <img src={programming1} alt='Programming'/>
                <p>Programming:</p>
            </div>
        </div>
    </div>
  )
}

export default TechnologiesUsed;
