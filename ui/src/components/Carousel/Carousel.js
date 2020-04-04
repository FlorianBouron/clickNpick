import React from 'react';
import Slider from 'react-slick';

// style
import './style.scss';

export default function Carousel({ children }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel">
      <Slider
      // eslint-disable-next-line react/jsx-props-no-spreading
        {...settings}
      >
        {children}
      </Slider>
    </div>
  );
}
