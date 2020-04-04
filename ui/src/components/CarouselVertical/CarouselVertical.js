import React from 'react';
import Slider from 'react-slick';

// style
import './style.scss';

export default function CarouselVertical({ children }) {
  const settings = {
    infinite: true,
    slidesToScroll: 1,
    vertical: true,
    slidesToShow: 2,
  };

  return (
    <div className="carousel-vertical">
      <Slider
      // eslint-disable-next-line react/jsx-props-no-spreading
        {...settings}
      >
        {children}
      </Slider>
    </div>
  );
}
