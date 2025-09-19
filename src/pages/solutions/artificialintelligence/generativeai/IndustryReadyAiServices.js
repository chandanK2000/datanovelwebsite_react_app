import React from 'react';
import './IndustryReadyAiServices.css';
import industryaiserviceimage from '../../../../assets/images/generativeAi/industryaiserviceimage.png';

const faqs = [
  {
    question: "Bank & Financial Services",
    answer: [
      "Automated fraud detection with AI-driven insights",
      "Enhanced customer support using AI chatbots",
      "Personalized financial recommendations",
      "Risk management with predictive analytics"
    ]
  },
  {
    question: "Healthcare",
    answer: [
      "AI-assisted diagnostics and medical imaging",
      "Personalized treatment recommendations",
      "Virtual health assistants",
      "Operational efficiency in hospital workflows"
    ]
  },
  {
    question: "Insurance",
    answer: [
      "Automated claims processing",
      "Fraud detection with machine learning",
      "Risk analysis and predictive underwriting",
      "Improved customer engagement with chatbots"
    ]
  },
  {
    question: "Manufacturing",
    answer: [
      "Predictive maintenance of machinery",
      "AI-based quality assurance",
      "Supply chain optimization",
      "Workforce productivity enhancement"
    ]
  },
  {
    question: "Retail & E-commerce",
    answer: [
      "Personalized shopping recommendations",
      "Automated inventory management",
      "AI-driven demand forecasting",
      "24/7 customer service bots"
    ]
  },
  {
    question: "Travel & Hospitality",
    answer: [
      "AI-powered travel recommendations",
      "Dynamic pricing optimization",
      "Customer service automation",
      "Enhanced guest experience personalization"
    ]
  }
];

const IndustryReadyAiServices = () => {
  return (
    <section className="industry-ready-ai-services py-5">
      <div className="container">
        <h2 className="text-center mb-3">
          Industry-Ready Gen AI Services<br />
          <span className="text-primary">Built to Fit, Built to Scale</span>
        </h2>
        <p className="text-center mb-5">
          From operations to experience, we build GenAI solutions that<br />
          address what is important for your industry.
        </p>

        <div className="row align-items-start">
          {/* FAQ Column */}
          <div className="col-lg-6 col-md-6 col-sm-12 faq-column">
            <div className="custom-accordion" id="industryFaqAccordion">
              {faqs.map((faq, index) => (
                <div className="accordion-items" key={index}>
                  <h2 className="accordion-headers" id={`heading${index}`}>
                    <button
                      className="accordion-buttons collapsed"
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
                    data-bs-parent="#industryFaqAccordion"
                  >
                    <div className="accordion-bodys">
                      <ul>
                        {faq.answer.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="col-lg-6 col-md-6 col-sm-12 text-center mt-4 mt-md-0 img-column">
            <img src={industryaiserviceimage} alt="Industry Ready AI Services" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryReadyAiServices;
