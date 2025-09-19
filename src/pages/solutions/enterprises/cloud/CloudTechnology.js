import React from 'react';
import Slider from 'react-slick';
import './CloudTechnology.css';

import cloudtechnology from '../../../..//assets/images/cloud/cloudtechnology.png';


const CloudTechnology = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        centerMode: true,
        centerPadding: "0px",
    };

    return (
        <div className="cloud-technology-container">
            <h2 className="cloud-technology-title">Cloud Technology</h2>
            <div className="cloud-technology-carousel">
                <Slider {...settings}>
                    <div>
                        <img src={cloudtechnology} alt="Cloud 1" className="carousel-img" />
                    </div>
                    <div>
                        <img src={cloudtechnology} alt="Cloud 2" className="carousel-img" />
                    </div>
                    <div>
                        <img src={cloudtechnology} alt="Cloud 3" className="carousel-img" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default CloudTechnology;
