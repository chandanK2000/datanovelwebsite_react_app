import React from 'react';
import './ComputervisionFaq.css';
import faqimage from '../../../../assets/images/faqimage.png';

// FAQ data
const faqs = [
  {
    Qnumber: '01',
    question: "What is computer vision?",
    answer: "Computer vision is a field of AI that enables machines to interpret and process visual data from the world, such as images and videos, to make decisions or automate tasks."
  },
  {
    Qnumber: '02',
    question: "Where is computer vision used?",
    answer: "It is used in areas such as autonomous vehicles, facial recognition, medical imaging, quality inspection, and surveillance systems."
  },
  {
    Qnumber: '03',
    question: "What technologies are used in computer vision?",
    answer: "Machine learning, deep learning, image processing, and neural networks are commonly used technologies in computer vision applications."
  },
  {
    Qnumber: '04',
    question: "How can computer vision improve business operations?",
    answer: "It can automate visual inspections, enhance security, improve customer experiences, and provide actionable insights from visual data."
  }
];

const ComputervisionFaq = () => {
  return (
    <section className="computervisionfaq py-5">
      <h2 className="computervisionfaq-title mb-4">
        FREQUENTLY ASKED <br />
        <span style={{ color: '#2C8BC5' }}>QUESTIONS</span>
      </h2>

      <div className="computervisionfaq-container d-flex gap-1">
        {/* Accordion */}
        <div className="computervisionfaq-sections col-md-6" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#computervisioncollapse${index}`}
                  aria-expanded="false"
                  aria-controls={`computervisioncollapse${index}`}
                >
                  {faq.Qnumber}- {faq.question}
                </button>
              </h2>
              <div
                id={`computervisioncollapse${index}`}
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
        <div className="computervisionfaq-image col-md-6">
          <img
            className="img-fluid rounded"
            src={faqimage}
            alt="Computer Vision FAQ Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default ComputervisionFaq;
