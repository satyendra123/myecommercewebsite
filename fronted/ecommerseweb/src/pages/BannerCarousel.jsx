import React from 'react';
import Slider from 'react-slick';

const BannerCarousel = ({ settings, children }) => {
  const defaultSettings = {
    dots: settings.dots || false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time on larger screens
    slidesToScroll: 1,
    autoplay: settings.autoplay || false,
    autoplaySpeed: 3000,
    centerMode: true, 
    responsive: [
      {
        breakpoint: 768, // For mobile screens (below 768px)
        settings: {
          slidesToShow: 1, // Show only 1 card at a time
          slidesToScroll: 1,
          centerMode: true, 
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...defaultSettings}>
        {children}
      </Slider>
    </div>
  );
};

export default BannerCarousel;

