import React from 'react';
import './IndustryUseCases.css';
import healthcareimage from '../../../../assets/images/cloud/healthcareimag.png';
import travelimage from '../../../../assets/images/cloud/travelimage.png';
import financeimage from '../../../../assets/images/cloud/financeimage.png';
import automobileimage from '../../../../assets/images/cloud/automobileimage.png';
import educationimage from '../../../../assets/images/cloud/educationimage.png';
import manufacturingimage from '../../../../assets/images/cloud/manufacturingimage.png';

const useCasesData = [
  {
    title: 'Healthcare',
    img: healthcareimage,
    description:
      'Reduced the high capital expenditure of a leading healthcare company by strategically migrating their core IT assets to the Cloud. The economies of scale offered by the Cloud enabled them to convert CapEx into OpEx.',
  },
  {
    title: 'Travel',
    img: travelimage,
    description:
      'As an eminent Cloud solution provider, we helped an online travel company ease their Cloud journey by seamlessly migrating their infrastructure to AWS. We further developed a Cloud-based application to deliver an enhanced user experience.',
  },
  {
    title: 'Finance',
    img: financeimage,
    description:
      'Re-architected and migrated the on-premise data center of a group holding company to the Cloud in a phased manner. Hundreds of servers were moved to an auto-scalable public Cloud, improving agility, automation, and business capabilities.',
  },
  {
    title: 'Automobile',
    img: automobileimage,
    description:
      'Developed a Cloud-based network between automotive suppliers and manufacturers to share data on parts and product availability; streamlined manufacturing processes and improved customer service.',
  },
  {
    title: 'Education',
    img: educationimage,
    description:
      "Migrated an education institution's data from on-premises servers to a secure private Cloud and enabled authorized access across the network; ensured regulatory compliance without disrupting daily operations.",
  },
  {
    title: 'Manufacturing',
    img: manufacturingimage,
    description:
      'Developed a Cloud-based inventory management application with interactive dashboards and real-time reporting for a global manufacturer using microservices architecture.',
  },
];

const IndustryUseCases = () => {
  return (
    <div className="industry-usecases-section py-5 px-3">
      <h2 className="text-center mb-3 ">Industry Use Cases</h2>
      <p className="text-center mb-4 headingparagraph">
        Damco&apos;s Cloud consulting services are empowering businesses across industry verticals
      </p>

      <div className="row g-3">
        {useCasesData.map((useCase, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12">
            <div className="card h-100 shadow-sm border-0  text-center">
              <img
                src={useCase.img}
                className="card-img-top"
                alt={useCase.title}
                style={{ height: '80px', objectFit: 'contain', padding: '10px',margin:'2px 0px' }}
              />
              <div className="card-body">
                <h5 className="card-title">{useCase.title}</h5>
                <p className="card-text">{useCase.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryUseCases;
