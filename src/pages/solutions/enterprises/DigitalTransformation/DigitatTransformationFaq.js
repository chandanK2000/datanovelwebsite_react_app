import React from 'react';
import './DigitalTransformationFaq.css';
import faqimage from '../../../../assets/images/faqimage.png';
// FAQ data
const faqs = [
  {
    question: "What is data transformation in digital transformation?",
    answer: "Data transformation in digital transformation refers to the process of converting data from its original format into a more suitable format for analysis, reporting, or integration with other systems. This process is essential for organizations to leverage their data effectively and gain actionable insights."
  },
  {
    question: "What are the main benefits of data transformation?",
    answer: "The main benefits include better data quality, faster analysis, and the ability to integrate data from multiple sources to drive better decision-making."
  },
  {
    question: "How does data transformation support digital transformation?",
    answer: "Data transformation ensures that data is clean, consistent, and in the right format, making it more accessible for AI, machine learning, and other data-driven technologies that power digital transformation."
  },
  {
    question: "Can data transformation help with data security?",
    answer: "Yes, data transformation processes can help standardize data and improve its security by eliminating redundancies and applying security protocols as data is moved between systems."
  }
];

const DigitalTransformationFaq = () => {
  return (
    <section className="digital-transformation-faq py-5">
      <h2 className="faq-title text-center mb-4">FREQUENTLY ASKED QUESTIONS</h2>
      
      <div className='d-flex flex-column flex-md-row align-items-center justify-content-between gap-4'>
        {/* Accordion container */}
        <div className="accordion col-md-8" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
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

        {/* FAQ Image Section */}
        <div className="col-md-4">
          <img
            className="faq-image img-fluid rounded"
            src={faqimage}
            alt="FAQ Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformationFaq;
