import React, { useRef } from 'react';
import Slider from 'react-slick';
import './BuildingFuture.css';
import buildingfuture1 from '../../../../assets/images/buildingfuture1.png';
import buildingfuture2 from '../../../../assets/images/buildingfuture2.png';
import buildingfuture3 from '../../../../assets/images/buildingfuture3.png';
import buildingfuture4 from '../../../../assets/images/buildingfuture4.png';

// Sample data for the slides (you can add more objects here as needed)
const slidesData = [
    {
        id: 1,
        title: "Custom Application Development",
        description: "Tailored apps for web, mobile, and enterprise needs.",
        imageUrl: buildingfuture1,
    },
    {
        id: 2,
        title: "Application Modernization",
        description: "Upgrade legacy apps to cloud-ready, scalable solutions.",
        imageUrl: buildingfuture2,
    },
    {
        id: 3,
        title: "Application Management & Support",
        description: "24/7 monitoring, bug fixes, and performance optimization.",
        imageUrl: buildingfuture3,
    },
    {
        id: 4,
        title: "Integration Services",
        description: "Seamless integration with your existing systems and third-party tools.",
        imageUrl: buildingfuture4,
    },
    // Add more items as needed
];

const BuildingFuture = () => {
    const sliderRef = useRef(null); // Create a reference to the Slider component

    const settings = {
        dots: false,  // Hide the dots
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="building-future">
            <h2>Building Future-Ready Applications, Managing Them Seamlessly.</h2>
            <Slider {...settings} ref={sliderRef}>
                {slidesData.map((slide) => (
                    <div key={slide.id} className="building-future-card">
                        <div className="building-future-image-container">
                            <img src={slide.imageUrl} alt={slide.title} className="building-future-image" />
                        </div>
                        <div className="building-future-details">
                            <h3>{slide.title}</h3>
                            <p>{slide.description}</p>
                            <button className="learn-more-button-building">Learn More</button>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Arrows below the slider */}
            <div className="building-future-arrows">
                <button className="slick-prev" onClick={() => sliderRef.current.slickPrev()}></button>
                <button className="slick-next" onClick={() => sliderRef.current.slickNext()}></button>
            </div>
        </div>
    );
};

export default BuildingFuture;
