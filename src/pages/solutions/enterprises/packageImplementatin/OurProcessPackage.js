import React from 'react'
import './OurProcessPackage.css'
import OurProcessPackage1 from '../../../../assets/images/ourprocesspackage1.png'
import OurProcessPackage2 from '../../../../assets/images/ourprocesspackage2.png'
import OurProcessPackage3 from '../../../../assets/images/ourprocesspackage3.png'
import OurProcessPackage4 from '../../../../assets/images/ourprocesspackage4.png'

const OurProcessPackage = () => {
  const steps = [
    {
      id: 1,
      img: OurProcessPackage1,
      alt: 'Requirement Analysis',
      text: 'In this phase, we gather requirements and understand your business needs.',
    },
    {
      id: 2,
      img: OurProcessPackage2,
      alt: 'Design & Prototyping',
      text: 'We create wireframes and prototypes to visualize the solution.',
    },
    {
      id: 3,
      img: OurProcessPackage1,
      alt: 'Development & Testing',
      text: 'Our team develops the solution and conducts thorough testing.',
    },
    {
      id: 4,
      img: OurProcessPackage2,
      alt: 'Deployment & Support',
      text: 'We deploy the solution and provide ongoing support.',
    },
  ]

  return (
    <div className='ourprocesspackage-container'>
      <h2 className='ourprocesspackage-title'>Our Process</h2>
      <div className='ourprocesspackage-content'>
        {steps.map((step) => (
          <div className='ourprocesspackage-item' key={step.id}>
            <img src={step.img} alt={step.alt} />
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurProcessPackage
