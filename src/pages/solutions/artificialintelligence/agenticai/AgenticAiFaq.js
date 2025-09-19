import React from 'react';
import './AgenticAiFaq.css';
import faqimage from '../../../../assets/images/faqimage.png';

// FAQ data
const faqs = [
  {
    Qnumber: '01',
    question: "What is Agentic AI?",
    answer: "Agentic AI refers to autonomous AI systems capable of making decisions and taking actions independently to achieve goals without constant human intervention."
  },
  {
    Qnumber: '02',
    question: "How is Agentic AI different from traditional AI?",
    answer: "Unlike traditional AI that requires explicit instructions, Agentic AI can operate autonomously, adapting its strategies and actions based on the environment and outcomes."
  },
  {
    Qnumber: '03',
    question: "What industries can use Agentic AI?",
    answer: "Industries like robotics, logistics, autonomous vehicles, and enterprise automation are leveraging Agentic AI to improve efficiency and decision-making."
  },
  {
    Qnumber: '04',
    question: "Is Agentic AI safe?",
    answer: "Safety in Agentic AI depends on robust design, monitoring, and ethical guidelines. Proper oversight ensures responsible use and prevents unintended consequences."
  }
];

const AgenticAiFaq = () => {
  return (
    <section className="agenticaifaq py-5">
      <h2 className="agenticaifaq-title mb-4">
        FREQUENTLY ASKED <br />
        <span style={{ color: '#2C8BC5' }}>QUESTIONS</span>
      </h2>

      <div className="agenticaifaq-container d-flex gap-1">
        {/* Accordion */}
        <div className="agenticaifaq-sections col-md-6" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#agenticcollapse${index}`}
                  aria-expanded="false"
                  aria-controls={`agenticcollapse${index}`}
                >
                  {faq.Qnumber}- {faq.question}
                </button>
              </h2>
              <div
                id={`agenticcollapse${index}`}
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
        <div className="agenticaifaq-image col-md-6">
          <img
            className="img-fluid rounded"
            src={faqimage}
            alt="Agentic AI FAQ Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default AgenticAiFaq;
