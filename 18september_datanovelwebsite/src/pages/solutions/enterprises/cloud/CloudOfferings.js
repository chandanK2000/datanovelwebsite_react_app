import React from "react";
import "./CloudOfferings.css";
import arrowicon from '../../../../assets/images/cloud/arrowiconscloud.png'
const offeringsData = [
    {
        title: "Cloud Consulting Services",
        description:
            "We guide businesses to adopt the right practices and best-fit platform for migrating legacy infrastructures and applications, creating a roadmap to enable transition with minimal disruption.",
    },
    {
        title: "Cloud Migration Services",
        description:
            "Seamless migration of applications, databases, and workloads to cloud environments with minimal downtime and maximum efficiency.",
    },
    {
        title: "Cloud Application Development",
        description:
            "Comprehensive management of your cloud environment, including monitoring, optimization, and security compliance.",
    },
    {
        title: "Cloud Management",
        description:
            "Robust security strategies and compliance frameworks to safeguard your data and meet regulatory requirements.",
    },
    {
        title: "Cloud Security",
        description:
            "Enhance performance while reducing operational costs by optimizing workloads and resource allocation.",
    },
    {
        title: "DevOps and Automation",
        description:
            "Design and build scalable, resilient, and cost-effective applications using modern cloud-native architectures.",
    },
];

const CloudOfferings = () => {
    return (
        <div className="cloud-offerings-section p-4">
            <h2 className="text-center mb-3">Our Cloud Offerings</h2>
            <p className="text-center mb-5 subtitle">
                Comprehensive Cloud Offerings to Achieve Disruptive Outcomes
            </p>
            <div className="row g-4">
                {offeringsData.map((offering, index) => (
                    <div
                        key={index}
                        className="col-lg-4 col-md-6 col-12 d-flex align-items-stretch"
                    >
                        <div className={`offering-card border p-3 shadow-sm rounded w-100 card-bg-${(index % 6) + 1}`}>
                            <h4>{offering.title}</h4>
                            <p>{offering.description}</p>
                            <div className="arrowicon">
                                <img src={arrowicon} alt='arrowicon' />
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CloudOfferings;
