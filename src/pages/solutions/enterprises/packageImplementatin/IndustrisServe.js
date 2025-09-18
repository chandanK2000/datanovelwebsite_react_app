import React from 'react';
import './IndustrisServe.css';

// Side images (illustrations)
import finances from '../../../../assets/images/finances.png';
import technologies from '../../../../assets/images/technologies.png';
import educations from '../../../../assets/images/educations.png';
import ecommerces from '../../../../assets/images/ecommerces.png';
import manufacturings from '../../../../assets/images/manufacturings.png';

// Main icons
import finance1 from '../../../../assets/images/industriesserve/red-cross.png';
import technology1 from '../../../../assets/images/industriesserve/Vector.png';
import ecommerce1 from '../../../../assets/images/industriesserve/delivery.png';
import manufacturings1 from '../../../../assets/images/industriesserve/factory-building.png'; 
import healthcare1 from '../../../../assets/images/industriesserve/Subtract.png';
import education1 from '../../../../assets/images/industriesserve/degree-hat.png';

const IndustrisServe = () => {
  const industriesData = [
    {
      imgMain: finance1,
      imgSide: finances,
      title: 'FINANCE',
      points: [
        'Build secure, scalable platforms for online banking, investments, and financial services.',
        'Integrate real-time data dashboards and analytics.',
        'Automate workflows for transactions, compliance, and customer onboarding.',
      ],
    },
    {
      imgMain: technology1,
      imgSide: technologies,
      title: 'TECHNOLOGY',
      points: [
        'Design innovative solutions to accelerate digital transformation.',
        'Develop enterprise-grade applications with scalability in mind.',
        'Implement cloud, AI, and automation for modern businesses.',
      ],
    },
    {
      imgMain: healthcare1,
      imgSide: educations,
      title: 'HEALTHCARE',
      points: [
        'Deliver custom solutions for healthcare systems and patient management.',
        'Integrate IoT for remote monitoring and connected devices.',
        'Ensure compliance with healthcare regulations and data privacy.',
      ],
    },
    {
      imgMain: education1,
      imgSide: educations,
      title: 'EDUCATION',
      points: [
        'Provide scalable solutions for education and e-learning.',
        'Develop interactive platforms for students and educators.',
        'Integrate gamification and real-time assessments.',
      ],
    },
    {
      imgMain: ecommerce1,
      imgSide: ecommerces,
      title: 'E-COMMERCE',
      points: [
        'Enable e-commerce platforms with high performance and security.',
        'Offer personalized recommendations powered by AI.',
        'Streamline order fulfillment, payments, and logistics.',
      ],
    },
    {
      imgMain: manufacturings1,
      imgSide: manufacturings,
      title: 'MANUFACTURING',
      points: [
        'Deliver robust solutions for manufacturing and logistics.',
        'Adopt Industry 4.0 with automation and IoT.',
        'Optimize supply chain and warehouse operations.',
      ],
    },
  ];

  return (
    <div className="industrisServe-section">
      <h2>Industries We Serve</h2>
      <div className="row g-3"> 
        {industriesData.map((industry, index) => (
          <div className="col-12 col-md-6 col-lg-6" key={index}>
            <div className="industry-card">
              <img src={industry.imgMain} alt={industry.title} className="industry-icon" />
              <h3>{industry.title}</h3>
              <div className="industrisServe-content">
                <div>
                  <ul>
                    {industry.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-3">
                  <img src={industry.imgSide} alt={industry.title} className="industry-side-img" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustrisServe;
