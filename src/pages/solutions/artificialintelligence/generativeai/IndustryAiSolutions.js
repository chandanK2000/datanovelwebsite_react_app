import React from 'react';
import './IndustryAiSolutions.css';
import secureImg from '../../../../assets/images/generativeAi/aisolutionsimage2.png';
import ethicalImg from '../../../../assets/images/generativeAi/aisolutionsimage1.png';
import intuitiveImg from '../../../../assets/images/generativeAi/aisolutionsimage3.png';
import reliableImg from '../../../../assets/images/generativeAi/aisolutionsimage4.png';
import usefulImg from '../../../../assets/images/generativeAi/aisolutionsimage5.png';

const solutionsData = [
    {
        title: "Secure",
        description: "Damco employs robust security measures to safeguard your data from unauthorized access, breaches, and cyber threats. Our generative AI solutions are designed with encryption, access controls, and continuous monitoring to mitigate risks and maintain the integrity of sensitive information.",
        image: secureImg,
        color: "#0087C6"
    },
    {
        title: "Ethical",
        description: "We uphold ethical standards in generative AI development, ensuring our solutions respect user privacy and adhere to fairness and transparency. We actively work to prevent biases in AI algorithms, fostering equal treatment and inclusivity.",
        image: ethicalImg,
        color: "#7BD9B7" 
    },
    {
        title: "Intuitive",
        description: "We strive to build AI systems that are user-friendly and intuitive in nature. Our teams emphasize designing interfaces and interactions that enable users to seamlessly engage with AI, ensuring an impeccable experience.",
        image: intuitiveImg,
        color: "#E8972D" 
    },
    {
        title: "Reliable",
        description: "We implement rigorous quality assurance during the development and training of our AI models. This includes thorough testing, validation, and monitoring to identify and address issues related to content quality, coherence, and relevance.",
        image: reliableImg,
        color: "#00A7BC" 
    },
    {
        title: "Useful",
        description: "We focus on delivering generative AI solutions that address specific business challenges and tailor our models to provide tangible benefits. Whether it’s improving efficiency, automating repetitive tasks, or enhancing decision-making, our AI is deployed with a clear purpose.",
        image: usefulImg,
        color: "#EAB32A"
    }
];


const IndustryAiSolutions = () => {
    const firstRow = solutionsData.slice(0, 3);
    const secondRow = solutionsData.slice(3);

    return (
        <section className='industry-ai-solutions-section'>
            <h2 className="text-center mb-3">
                Industry-Ready Gen AI Services<br />
                <span className="text-primary">Built to Fit, Built to Scale</span>
            </h2>
            <p className="text-center mb-5">
                From operations to experience, we build GenAI solutions that<br />
                address what is important for your industry.
            </p>

            {/* First Row */}
            <div className="solutions-row first-row">
                {firstRow.map((item, idx) => (
                    <div className="solution-item" key={idx}>
                        <img src={item.image} alt={item.title} />
                        <h3  style={{ color: item.color }}>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>

            <div className="main-hr"></div>
            {/* Second Row */}
            <div className="solutions-row second-row">
                {secondRow.map((item, idx) => (
                    <div className="solution-item" key={idx}>
                        <h3  style={{ color: item.color }}>{item.title}</h3>
                        <p>{item.description}</p>
                        <img src={item.image} alt={item.title} />

                    </div>
                ))}
            </div>
        </section>

    );
};

export default IndustryAiSolutions;
