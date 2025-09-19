import React from 'react';
import './GenerativeAiFaq.css';
import faqimage from '../../../../assets/images/faqimage.png';

// FAQ data
const faqs = [
  {
    Qnumber: '01',
    question: "What is Generative AI?",
    answer: "Generative AI refers to artificial intelligence systems capable of generating text, images, or other media from input data, using deep learning models like GPT or diffusion models."
  },
  {
    Qnumber: '02',
    question: "How can businesses benefit from Generative AI?",
    answer: "Generative AI can enhance content creation, automate design tasks, improve customer experiences, and help in prototyping and innovation."
  },
  {
    Qnumber: '03',
    question: "Is Generative AI safe to use?",
    answer: "While powerful, Generative AI requires careful monitoring to avoid biased outputs or misinformation. Ethical guidelines and human oversight are essential."
  },
  {
    Qnumber: '04',
    question: "What industries can leverage Generative AI?",
    answer: "Industries such as marketing, entertainment, education, healthcare, and software development are already leveraging Generative AI for innovation and efficiency."
  }
];

const GenerativeAiFaq = () => {
  return (
    <section className="generativeaifaq py-5">
      <h2 className="generativeaifaq-title mb-4">
        FREQUENTLY ASKED <br />
        <span style={{ color: '#2C8BC5' }}>QUESTIONS</span>
      </h2>

      <div className="generativeaifaq-container d-flex gap-1">
        {/* Accordion */}
        <div className="generativeaifaq-sections col-md-6" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#generativecollapse${index}`}
                  aria-expanded="false"
                  aria-controls={`generativecollapse${index}`}
                >
                  {faq.Qnumber}- {faq.question}
                </button>
              </h2>
              <div
                id={`generativecollapse${index}`}
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
        <div className="generativeaifaq-image col-md-6">
          <img
            className="img-fluid rounded"
            src={faqimage}
            alt="Generative AI FAQ Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default GenerativeAiFaq;
