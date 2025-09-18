import React, { useState } from 'react';
import './CaseStudiesBlock.css';
import likes from '../../../assets/icons/likes.png';
import views from '../../../assets/icons/views.png';
import shares from '../../../assets/icons/shares.png';
import rightarrows from '../../../assets/icons/Rightarrows.png';

import { Link } from 'react-router-dom';
import caseStudiesData from './CaseStudiesData';


// Dropdown labels mapped to object keys
const dropdownOptions = [
    { label: "Industries", value: "finance" },
    { label: "Pharma", value: "healthcare" },
    { label: "Technology", value: "retail" },
    { label: "FMCG", value: "education" },
    { label: "Manufacturing", value: "manufacturing" },
    { label: "Research", value: "research" },
    { label: "News", value: "news" }
];

const CaseStudiesBlock = () => {
    const [selectedOption, setSelectedOption] = useState('finance');

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    return (
        <section className='case-studies-block-section'>
            <div className="contents">
                <div class="select-wrapper">

                    <select
                        id="caseDropdown"
                        value={selectedOption}
                        onChange={handleChange}
                    >
                        {/* <option value="">-- Select Case Study --</option> */}
                        {dropdownOptions.map((opt, i) => (
                            <option key={i} value={opt.value} className='select-option'>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Show case study blocks dynamically */}
         {/* <div className="case-study-grid">
                {selectedOption && caseStudiesData[selectedOption]?.length > 0 ? (
                    caseStudiesData[selectedOption].map((item, index) => (
                        
                        <div className="case-study-card" key={index}>
                            <h2>{item.title}</h2>
                            <img src={item.image} alt={item.title} />
                            <h3>{item.subheading}</h3>
                            <p>{item.description}<br/>
                                <a href={item.readMore} className="read-more">Read More <img src={rightarrows} alt="Right Arrow" /></a>

                            </p>

                            <div className="card-stats">
                                <div>
                                    <span className="likes"><img src={likes} alt="Likes" /> {item.likes}</span>
                                    <span className="views"><img src={views} alt="Views" /> {item.views}</span>
                                </div>
                                <div>
                                    <span className="shares"><img src={shares} alt="Shares" /> {item.shares}</span>
                                </div>

                            </div>

                        </div>
                    ))
                ) : (
                    selectedOption && <p>No case studies available yet.</p>
                )}
            </div> */}

            <div className="case-study-grid">
                {selectedOption && caseStudiesData[selectedOption]?.length > 0 ? (
                    caseStudiesData[selectedOption].map((item, index) => (
                        <Link
                            to={`/casestudy/${index + 1}`}
                            key={index}
                            className="case-study-card"
                        >
                            <h2>{item.title}</h2>
                            <img src={item.image} alt={item.title} />
                            <h3>{item.subheading}</h3>
                            <p>
                                {item.description}
                                {/* <br /> */}
                                <span className="read-more">
                                    Read More <img src={rightarrows} alt="Right Arrow" />
                                </span>
                            </p>
                            <div className="card-stats">
                                <div>
                                    <span className="likes">
                                        <img src={likes} alt="Likes" /> {item.likes}
                                    </span>
                                    <span className="views">
                                        <img src={views} alt="Views" /> {item.views}
                                    </span>
                                </div>
                                <div>
                                    <span className="shares">
                                        <img src={shares} alt="Shares" /> {item.shares}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    selectedOption && <p>No case studies available yet.</p>
                )}
            </div>

        </section>
    );
};

export default CaseStudiesBlock;
