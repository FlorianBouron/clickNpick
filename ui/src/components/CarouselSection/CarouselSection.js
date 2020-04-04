import React from 'react';
import Typography from '@material-ui/core/Typography';
import Section from '../Section';
import Carousel from '../Carousel/Carousel';

// style
import './style.scss';


export default function CarouselSection({ data, title }) {
  function getCarouselImages() {
    return data.map(({ text, src }) => (
      <div classNam="carousel-section__slide">
        <div className="carousel-section__image-wrapper">

          <img className="carousel-section__image" src={src} alt="apple" />
        </div>
        <Typography
          variant="body1"
          component="body1"
          className="carousel-section__text"
        >
          {text}
        </Typography>
      </div>
    ));
  }

  return (
    <Section className="carousel-section">
      <Typography
        variant="h3"
        component="h3"
        className="carousel-section__header"
      >
        {title}
      </Typography>
      <Carousel>{getCarouselImages()}</Carousel>
    </Section>
  );
}
