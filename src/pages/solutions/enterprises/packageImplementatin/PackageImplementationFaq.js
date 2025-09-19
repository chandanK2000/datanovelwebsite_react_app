import React from 'react';
import './PackageImplementationFaq.css';
import faqimage from '../../../../assets/images/faqimage.png';

// FAQ data
const faqs = [
  {
    Qnumber: '01',
    question: "What is package implementation?",
    answer: "Package implementation refers to the process of deploying a software package in an organization, configuring it, and ensuring it meets the business requirements."
  },
  {
    Qnumber: '02',
    question: "Why is package implementation important?",
    answer: "Proper implementation ensures the software functions as intended, reduces errors, improves user adoption, and maximizes return on investment."
  },
  {
    Qnumber: '03',
    question: "What are common challenges in package implementation?",
    answer: "Challenges include data migration, user training, customization needs, and integration with existing systems."
  },
  {
    Qnumber: '04',
    question: "How can we ensure successful package implementation?",
    answer: "Success can be ensured through proper planning, skilled resources, thorough testing, and ongoing support and training."
  }
];

const PackageImplementationFaq = () => {
  return (
    <section className="packagefaq py-5">
      <h2 className="packagefaq-title mb-4">
        FREQUENTLY ASKED <br />
        <span style={{ color: '#2C8BC5' }}>QUESTIONS</span>
      </h2>

      <div className="packagefaq-container d-flex gap-1">
        {/* Accordion */}
        <div className="packagefaq-sections col-md-6" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#packagecollapse${index}`}
                  aria-expanded="false"
                  aria-controls={`packagecollapse${index}`}
                >
                  {faq.Qnumber}- {faq.question}
                </button>
              </h2>
              <div
                id={`packagecollapse${index}`}
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
        <div className="packagefaq-image col-md-6">
          <img
            className="img-fluid rounded"
            src={faqimage}
            alt="Package FAQ Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default PackageImplementationFaq;
