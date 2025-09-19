import React from 'react';
import './ChooseGenerativeAi.css';
import generativeaiChooseimage1 from '../../../../assets/images/generativeAi/generativeaiChooseimage1.png'; 

const ChooseGenerativeAi = () => {
  const points = [
    {
      title: "Unmatched Experience",
      description: "Our seasoned AI experts are well-positioned to understand diverse business needs across industries to unlock the transformative potential of generative AI for your business."
    },
    {
      title: "Rapid Development",
      description: "We help you turn business possibilities into reality within weeks with the help of our rapid AI development frameworks and accelerators."
    },
    {
      title: "Tailored Solutions",
      description: "We closely collaborate with you to understand the unique challenges you may be facing and engineer bespoke generative AI models that align perfectly with your specific use case and goals."
    },
    {
      title: "Focus on Security",
      description: "With an unwavering focus on data security and compliance, we help safeguard your business-critical information from unauthorized access or breaches."
    },
    {
      title: "Top 1% Talent",
      description: "Proficient in a range of technologies including machine learning, deep learning, and natural language processing, our experts build high-performing solutions that address diverse business needs."
    }
  ];

  return (
    <section className='choose-generativeai-section'>
      <div className="text-center">
        <h2>Why Choose Datanovel as Your Generative</h2>
        <h3>AI Development Company?</h3>
        <p>Harness the capabilities of a reliable tech partner to drive your business forward</p>
      </div>

      <div className='choose-generativeai-contents'>
        <div className='ai-image'>
          <img src={generativeaiChooseimage1} alt="Generative AI" />
        </div>

        <div className='ai-points'>
          <ul>
            {points.map((point, idx) => (
              <li key={idx}>
                <h4>{point.title}</h4>
                <p>{point.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ChooseGenerativeAi;
