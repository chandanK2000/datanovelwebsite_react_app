import React from 'react';
import './CloudAdvisorySection.css';
import advisoryimage from '../../../../assets/images/cloud/advisoryImage.png';

const CloudAdvisorySection = () => {
    return (
        <div className="cloudAdvisory-solution-section">
            <h2 className="cloudAdvisory-title">
                Cloud Advisory Solutions to Optimize <br />Performance and Costs
            </h2>

            <div className="cloudAdvisory-row">
                {/* Left Content */}
                <div className="cloudAdvisory-col text-content">
                    <p>
                        Legacy IT infrastructures often fail to manage the growing load of applications, data, and devices, pushing businesses to migrate to the cloud. Implemented the right way, the Cloud can help organizations cut down operational costs, drive innovation, and address legacy challenges.

                        A recognized leader in Cloud solutions consulting, Damco helps you unlock the true potential of the Cloud through its end-to-end suite of Cloud services. We closely assess your needs, challenges, and technology landscape to devise personalized, sustainable Cloud solutions that enable a connected and transformed future for your business. By leveraging our strategic partnerships with AWS, Azure, and Google Cloud, we help your business evolve its Cloud capabilities, define new revenue streams, develop Cloud-based applications, accelerate product release, and slash infrastructure costs by up to 50%.

                    </p>
                </div>

                {/* Right Image */}
                <div className="cloudAdvisory-col image-content">
                    <img
                        src={advisoryimage}
                        alt="Cloud Advisory"
                        className="cloudAdvisory-img"
                    />
                </div>
            </div>
        </div>
    );
};

export default CloudAdvisorySection;
