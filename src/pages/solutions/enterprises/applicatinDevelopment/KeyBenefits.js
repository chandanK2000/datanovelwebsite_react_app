import React from 'react';
import keybenefits1 from '../../../../assets/images/keybenefits1.png';
import keybenefits2 from '../../../../assets/images/keybenefits2.png';
import keybenefits3 from '../../../../assets/images/keybenefits3.png';
import keybenefits4 from '../../../../assets/images/keybenefits4.png';
import './KeyBenefits.css';

const KeyBenefits = () => {
    return (
        <div className="key-benefits-section p-4">
            <div className="row">
                {/* Main content column */}
                <div className="col-lg-9">
                    <div className="row">
                        {/* Left section */}
                        <div className="col-lg-4">
                            <div className="left-first-section my-1">
                                <h2>Faster</h2>
                                <p>Time-to-market with agile methodologies</p>
                                <img
                                    src={keybenefits1}
                                    alt="Faster time-to-market with agile methodologies"
                                />
                            </div>
                        </div>

                        {/* Right section with images */}
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="middle-item d-flex">
                                        <div>
                                            <h3>Reduced operational costs with proactive monitoring</h3>
                                        </div>
                                        <div className="image-right">
                                            <img
                                                src={keybenefits2}
                                                alt="Reduced operational costs with proactive monitoring"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="middle-section-bottom-item1">
                                        <img
                                            src={keybenefits3}
                                            alt="Scalable solutions to grow with your business"
                                        />
                                        <p>Enhanced user experience with UI/UX</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="middle-section-bottom-item2">
                                        <img
                                            src={keybenefits4}
                                            alt="Scalable solutions to grow with your business"
                                        />
                                        <p>Enhanced user experience with UI/UX</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Benefits Section */}
                <div className="col-lg-3 right">
                    <h3>Key Benefits:</h3>
                </div>
            </div>
        </div>
    );
};

export default KeyBenefits;
