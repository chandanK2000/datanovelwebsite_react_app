import React from 'react';
import './NlpFaq.css';
import faqimage from '../../../../assets/images/faqimage.png';

// FAQ data
const faqs = [
  {
    Qnumber: '01',
    question: "What is NLP?",
    answer: "Natural Language Processing (NLP) is a field of AI that focuses on the interaction between computers and human language, enabling machines to understand, interpret, and generate text or speech."
  },
  {
    Qnumber: '02',
    question: "What are the applications of NLP?",
    answer: "Applications include chatbots, sentiment analysis, machine translation, speech recognition, text summarization, and information extraction."
  },
  {
    Qnumber: '03',
    question: "How does NLP work?",
    answer: "NLP combines linguistics, computer science, and machine learning to process and analyze natural language data. Techniques include tokenization, parsing, semantic analysis, and deep learning models."
  },
  {
    Qnumber: '04',
    question: "What are the challenges of NLP?",
    answer: "Challenges include understanding context, ambiguity in language, slang, idioms, multiple languages, and the need for large datasets for training accurate models."
  }
];

const NlpFaq = () => {
  return (
    <section className="nlpfaq py-5">
      <h2 className="nlpfaq-title mb-4">
        FREQUENTLY ASKED <br />
        <span style={{ color: '#2C8BC5' }}>QUESTIONS</span>
      </h2>

      <div className="nlpfaq-container d-flex gap-1">
        {/* Accordion */}
        <div className="nlpfaq-sections col-md-6" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#nlpcollapse${index}`}
                  aria-expanded="false"
                  aria-controls={`nlpcollapse${index}`}
                >
                  {faq.Qnumber}- {faq.question}
                </button>
              </h2>
              <div
                id={`nlpcollapse${index}`}
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
        <div className="nlpfaq-image col-md-6">
          <img
            className="img-fluid rounded"
            src={faqimage}
            alt="NLP FAQ Illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default NlpFaq;
