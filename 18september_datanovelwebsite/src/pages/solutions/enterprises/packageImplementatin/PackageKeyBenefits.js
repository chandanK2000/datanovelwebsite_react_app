import React from 'react'
import './PackageKeyBenefits.css'
import packagekeybenefits1 from '../../../../assets/images/packagekeybenefits1.png'
import packagekeybenefits2 from '../../../../assets/images/packagekeybenefits2.png'
import packagekeybenefits3 from '../../../../assets/images/packagekeybenefits3.png'
import packagekeybenefits4 from '../../../../assets/images/packagekeybenefits4.png'

const PackageKeyBenefits = () => {
  const benefits = [
    {
      id: 1,
      img: packagekeybenefits1,
      title: 'Faster deployment with proven methodologies',
    },
    {
      id: 2,
      img: packagekeybenefits2,
      title: 'Reduced operational risks and downtime',
    },
    {
      id: 3,
      img: packagekeybenefits3,
      title: 'Cost efficiency with out-of-the-box solutions',
    },
    {
      id: 4,
      img: packagekeybenefits4,
      title: 'Enhanced productivity through streamlined processes',
    },
  ]

  return (
    <div className='keybenefits-container'>
<h2 className="section-titles">Key Benefits</h2>
      <div className='keybenefits-content'>
        {benefits.map((benefit) => (
          <div className='benefit-item' key={benefit.id}>
            <img src={benefit.img} alt={benefit.title} />
            <h3>{benefit.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PackageKeyBenefits
