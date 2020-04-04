import React from 'react';
import Typography from '@material-ui/core/Typography';
import Section from '../Section';
import Carousel from '../Carousel/Carousel';


// style
import './style.scss';

export default function CarouselSection() {
  function getCarouselImages() {
    return [1, 2, 3].map(() => (
      <div classNam="carousel-section__slide">
        <img
          className="carousel-section__image"
          src="https://www.eho.eu/wp-content/uploads/2018/10/jabolko_novo.jpg"
          alt="apple"
        />
        <Typography variant="body1" component="body1" className="carousel-section__text">
          Why is it worth it?
        </Typography>
      </div>
    ));
  }

  return (
    <Section className="carousel-section">
      <Typography variant="h3" component="h3" className="carousel-section__header">
        Why is it worth it?
      </Typography>
      <Carousel>{getCarouselImages()}</Carousel>
    </Section>
  );
}
