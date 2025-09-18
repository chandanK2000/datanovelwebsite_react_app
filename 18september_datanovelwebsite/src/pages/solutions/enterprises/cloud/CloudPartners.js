import React from 'react';
import './CloudPartners.css';
import arrowicon from '../../../../assets/images/cloud/arrowiconscloud.png'

const partnersData = [
  {
    title: "AWS",
    description:
      "As strategic Amazon Web Services Partners, we provide a comprehensive suite of Cloud consulting services and solutions to deliver the best-fit enterprise requirements. Our AWS experts enable businesses to move their legacy infrastructure and applications to the Cloud.",
  },
  {
    title: "Microsoft Azure",
    description:
      "Leveraging the Microsoft Azure partnership, we offer cloud computing consulting services and solutions to facilitate a seamless migration of applications and infrastructures over the Azure Cloud. With our Azure experts and agile approach, we simplify the challenges of Cloud adoption and migration.",
  },
  {
    title: "Google Cloud",
    description:
      "We deliver bespoke Google cloud computing consulting services to develop and optimize solutions as per the business maturity level and needs. Our proven expertise and Google Cloud competency with the DevOps approach create a comprehensive delivery cycle for easy deployment.",
  },
];

const CloudPartners = () => {
  return (
    <div className="cloud-partner-section p-4">
      <h2 className="cloud-partner-title">Our Cloud Partner Ecosystem</h2>
      <div className="row justify-content-center">
        {partnersData.map((partner, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12">
            <div className="partner-card">
              <h3>{partner.title}</h3>
              <p>{partner.description}</p>
              <div className='mt-5'>
                <img src={arrowicon} alt='arrowicon'/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudPartners;
