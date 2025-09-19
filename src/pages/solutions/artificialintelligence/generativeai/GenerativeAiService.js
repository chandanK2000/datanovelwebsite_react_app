import React from 'react';
import './GenerativeAiService.css';

const GenerativeAiService = () => {
    const services = [
        {
            title: "Generative AI Consulting",
            desc: "Make GenAI work smarter for your business. From understanding the right use cases to designing a responsible deployment, our advisory aligns AI potential with business goals, not through guesswork or over-engineering."
        },
        {
            title: "LLM Configuration",
            desc: "Configure large language models to fit your unique workflows and security needs. Whether using OpenAI or open-source alternatives, every setup is built with performance, context relevance, and governance in mind."
        },
        {
            title: "LLM Testing & Fine-Tuning",
            desc: "Out-of-the-box models rarely meet enterprise needs. We test real use cases, tune parameters, and fine-tune on proprietary data, resulting in responses that are sharper, more accurate, and contextually aligned with your business."
        },
        {
            title: "Prompt Engineering",
            desc: "We design and refine prompt flows that guide your GenAI models toward consistent, accurate, and context-aware responses across both customer-facing applications and internal workflows."
        },
        {
            title: "AI Agent Development",
            desc: "Create task-oriented AI agents that do real work, closing tickets, writing content, or helping teams. Each agent is customized, auditable, and intended to fit within your systems and oversight processes."
        },
        {
            title: "Generative AI Integration",
            desc: "Embed GenAI into the tools your teams already use, CRMs, intranets, service portals, ensuring fast adoption, secure data access, and zero disruption. The result: AI that supports work without slowing it down."
        },
    ];

    return (
        <section className="generative-ai-service-section py-4">
            <div className="container">
                <h2 className="text-center mb-3">
                    Our Generative AI Services <br />
                    <span className="">Purpose-built For Enterprise Scale</span>
                </h2>
                <p className="text-center mb-5">Comprehensive generative AI development <br/>to unlock new possibilities</p>

                <div className="row g-3">
                    {services.map((service, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100 shadow-sm p-3 service-card">
                                <h5 className="card-title">{service.title}</h5>
                                <p className="card-text">{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GenerativeAiService;
