import React from 'react'
import './CloudBusinessBenefits.css';
import cloudbusinessbenefits1 from '../../../../assets/images/cloud/cloudbusinessBenefits1.png'
import cloudbusinessbenefits2 from '../../../../assets/images/cloud/cloudbusinessBenefits2.png'
import cloudbusinessbenefits3 from '../../../../assets/images/cloud/cloudbusinessBenefits3.png'
import cloudbusinessbenefits4 from '../../../../assets/images/cloud/cloudbusinessBenefits4.png'

const CloudBusinessBenefits = () => {
  const benefits = [
    {
      id: 1,
      img: cloudbusinessbenefits1,
      title: 'Optimized Costs',
      description:
        'Businesses need not invest in maintaining on-premises IT infrastructure; they pay only for what they use.',
    },
    {
      id: 2,
      img: cloudbusinessbenefits2,
      title: 'Security',
      description:
        'Stringent security regulations keep business data safe from malware, hacks, and internal theft.',
    },
    {
      id: 3,
      img: cloudbusinessbenefits3,
      title: 'Easy Scalability',
      description:
        'Seamless scalability and agility of Cloud platforms help address fluctuating workloads without a hitch.',
    },
    {
      id: 4,
      img: cloudbusinessbenefits4,
      title: 'Business Continuity',
      description:
        'Automated back-up and DR solutions ensure minimal to no impact on operations in the event of a disaster.',
    },
  ]

  return (
    <div className='cloud-benefits-container'>
      <h2 className='cloud-benefits-title'>Business Benefits</h2>
      <p className='section-subtitle'>
        Harness the Power of the Cloud for an Unprecedented Experience
      </p>
      <div className='cloud-benefits-content'>
        {benefits.map((benefit) => (
          <div className='cloud-benefit-item' key={benefit.id}>
            <img src={benefit.img} alt={benefit.title} />
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CloudBusinessBenefits
