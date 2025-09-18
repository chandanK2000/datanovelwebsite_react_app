import React from 'react';
import './ResultOrientedBenefits.css';
import finance from '../../../../assets/icons/finances.png';
import ecommerce from '../../../../assets/icons/ecommerce.png';
import healthcare from '../../../../assets/icons/healthcare.png';
import technology from '../../../../assets/icons/technology.png';

const ResultOrientedBenefits = () => {
    return (
        <div className='result-oriented-benefits'>
            <h2 className="result-oriented-benefits__title">Result-oriented Benefits:</h2>
            <div className='result-oriented-benefits__list'>
                <div className='result-oriented-benefits__item finance'>
                    <div className="pentagon">
                        <img src={finance} alt="Finance" />
                    </div>
                    <h3>Finance</h3>
                    <p>Optimize financial operations and enhance decision-making with accurate data insights.</p>
                </div>
                <div className='result-oriented-benefits__item ecommerce'>
                    <div className="pentagon">
                        <img src={ecommerce} alt="E-commerce" />
                    </div>
                    <h3>E-commerce</h3>
                    <p>Leverage data analytics to understand customer behavior and improve sales strategies.</p>
                </div>
                <div className='result-oriented-benefits__item healthcare'>
                    <div className='pentagon'>
                        <img src={healthcare} alt="Healthcare" />
                    </div>
                    <h3>Healthcare</h3>
                    <p>Utilize data-driven insights to enhance patient care and streamline operations.</p>
                </div>
                <div className='result-oriented-benefits__item technology'>
                    <div className='pentagon'>
                        <img src={technology} alt="Technology" />
                    </div>
                    <h3>Technology</h3>
                    <p>Implement advanced analytics to drive innovation and improve product development.</p>
                </div>
            </div>
        </div>
    );
};

export default ResultOrientedBenefits;
