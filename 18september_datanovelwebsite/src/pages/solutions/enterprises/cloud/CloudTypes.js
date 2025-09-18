import React from 'react';
import './CloudTypes.css';

const CloudTypes = () => {
  const cloudDeployments = [
    {
      id: 1,
      title: 'Public Cloud',
      description:
        'Enjoy on-demand scalability, flexible pricing, and global accessibility with minimal investment.',
    },
    {
      id: 2,
      title: 'Private Cloud',
      description:
        'Get enhanced control, security, and customization tailored to your enterprise’s unique requirements.',
    },
    {
      id: 3,
      title: 'Hybrid Cloud',
      description:
        'Combine the best of public and private cloud for optimized workloads and flexibility.',
    },
    {
      id: 4,
      title: 'Multi-Cloud',
      description:
        'Leverage multiple cloud providers to minimize risk, avoid vendor lock-in, and maximize performance.',
    },
  ];

  return (
    <div className="cloud-types-container py-4 px-4">
      {/* Main section with image */}
      <div className="cloud-types-header text-center">
        <h2 className="cloud-types-title">Types of Cloud Deployments We Handle</h2>
      </div>

      {/* Dynamic deployment cards */}
      <div className="row g-2 cloud-types-content">
        {cloudDeployments.map((cloud) => (
          <div key={cloud.id} className="col-lg-6 col-md-6 col-12">
            <div className="cloud-type-card">
              <h3>{cloud.title}</h3>
              <p>{cloud.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudTypes;
