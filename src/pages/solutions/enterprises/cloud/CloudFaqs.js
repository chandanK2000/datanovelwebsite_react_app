import React from 'react';
import './CloudFaqs.css';
import faqimage from '../../../../assets/images/faqimage.png';

// FAQ data
const faqs = [
  {
    Qnumber: '01',
    question: "What is cloud computing?",
    answer: "Cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, and analytics—over the internet, enabling faster innovation and flexible resources."
  },
  {
    Qnumber: '02',
    question: "What are the benefits of using cloud solutions?",
    answer: "Cloud solutions reduce IT costs, improve scalability, enhance security, and allow businesses to access their resources from anywhere at any time."
  },
  {
    Qnumber: '03',
    question: "Is cloud computing secure?",
    answer: "Yes, cloud providers implement strong security practices like encryption, compliance certifications, and advanced monitoring to keep your data safe."
  },
  {
    Qnumber: '04',
    question: "Can small businesses benefit from cloud technology?",
    answer: "Absolutely. Small businesses gain cost savings, flexibility, and access to enterprise-level infrastructure without heavy upfront investments."
  }
];

const CloudFaqs = () => {
  return (
    <section className="cloudfaq py-5">
      <h2 className="cloudfaq-title mb-4">
        FREQUENTLY ASKED <br />
        <span style={{ color: '#2C8BC5' }}>QUESTIONS</span>
      </h2>

      <div className="cloudfaq-container d-flex gap-1">
        {/* Accordion */}
        <div className="cloudfaq-sections col-md-6" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#cloudcollapse${index}`}
                  aria-expanded="false"
                  aria-controls={`cloudcollapse${index}`}
                >
                  {faq.Qnumber}- {faq.question}
                </button>
              </h2>
              <div
                id={`cloudcollapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Image */}
        <div className="cloudfaq-image col-md-6">
          <img
            className="img-fluid rounded"
            src={faqimage}
            alt="Cloud FAQ Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default CloudFaqs;
