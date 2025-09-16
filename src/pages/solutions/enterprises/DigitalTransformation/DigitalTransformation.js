import React, { useState } from 'react';
import dataMigration from '../../../..//assets/images/dataquality.jfif';
import dataActivation from '../../../../assets/images/dataActivation.jfif';
import dataplatform from '../../../../assets/images/dataplatform.jfif';
import dataquality from '../../../../assets/images/dataquality.jfif';
import './DigitalTransformation.css';

const offeringsData = [
  {
    title: 'Data Cleansing & Standardization',
    image: dataMigration,
    // description: 'Migrate data faster, better, and cost-effectively',
    points: [
      {
        heading: 'Seamless legacy-to-modern migration',
        text: 'Bridge the gap between outdated infrastructure and cutting-edge technology, future-proofing your data management.'
      }
  
    ]
  },
  {
    title: 'Data Integration',
    image: dataActivation,
    // description: 'Activate your data to drive actionable insights',
    points: [
      {
        heading: 'Real-time data activation',
        text: 'Turn your data into actionable insights instantly.'
      }
  
    ]
  },
  {
    title: 'Data Enrichment',
    image: dataplatform,
    // description: 'Modernize your data platform for scalability and efficiency',
    points: [
      {
        heading: 'Cloud-native architecture',
        text: 'Move to modern cloud platforms for efficiency and scale.'
      }
  
    ]
  },
  {
    title: 'Data Migration & Modernization',
    image: dataquality,
    // description: 'Ensure high-quality and reliable data for your business',
    points: [
      {
        heading: 'Data validation & cleansing',
        text: 'Maintain accurate and consistent data.'
      }
  
    ]
  }
];

const DigitalTransformation = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="digital-transformation">
      <h2 className="digital-transformation__title">Digital Transformation</h2>

      {/* Tabs */}
      <div className="digital-transformation__tabs">
        {offeringsData.map((item, index) => (
          <div
            key={index}
            className={`digital-transformation__tab ${activeTab === index ? 'digital-transformation__tab--active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {item.title}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="digital-transformation__content">
        <div className="digital-transformation__image">
          <img
            src={offeringsData[activeTab].image}
            alt={offeringsData[activeTab].title}
          />
        </div>
        <div className="digital-transformation__details">
          <h3>{offeringsData[activeTab].title}</h3>
          {/* <p>{offeringsData[activeTab].description}</p> */}
          <div>
            {offeringsData[activeTab].points.map((point, idx) => (
              <div key={idx}>
                <p>{point.text}</p>
              </div>
            ))}
          </div>
          <button className='digital_transform_learn_more'>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformation;
