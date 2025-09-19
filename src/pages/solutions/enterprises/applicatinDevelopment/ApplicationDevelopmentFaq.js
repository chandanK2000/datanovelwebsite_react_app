import React from 'react';
import './ApplicationDevelopmentFaq.css';
import faqimage from '../../../../assets/images/faqimage.png';

// FAQ data
const faqs = [
  {
    Qnumber: '01',
    question: "What is application development?",
    answer: "Application development is the process of designing, building, and deploying software applications for various platforms to meet business or user requirements."
  },
  {
    Qnumber: '02',
    question: "Why is application development important?",
    answer: "It enables organizations to automate processes, improve efficiency, and provide innovative solutions to users."
  },
  {
    Qnumber: '03',
    question: "What are common application development methodologies?",
    answer: "Agile, Waterfall, DevOps, and Rapid Application Development (RAD) are commonly used methodologies."
  },
  {
    Qnumber: '04',
    question: "How can we ensure high-quality applications?",
    answer: "Through proper planning, testing, code review, and continuous integration and deployment practices."
  }
];

const ApplicationDevelopmentFaq = () => {
  return (
    <section className="appdevfaq py-5">
      <h2 className="appdevfaq-title mb-4">
        FREQUENTLY ASKED <br />
        <span style={{ color: '#2C8BC5' }}>QUESTIONS</span>
      </h2>

      <div className="appdevfaq-container d-flex gap-1">
        {/* Accordion */}
        <div className="appdevfaq-sections col-md-6" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#appdevcollapse${index}`}
                  aria-expanded="false"
                  aria-controls={`appdevcollapse${index}`}
                >
                  {faq.Qnumber}- {faq.question}
                </button>
              </h2>
              <div
                id={`appdevcollapse${index}`}
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
        <div className="appdevfaq-image col-md-6">
          <img
            className="img-fluid rounded"
            src={faqimage}
            alt="Application Development FAQ Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default ApplicationDevelopmentFaq;
