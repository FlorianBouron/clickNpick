import React from 'react';
import Typography from '@material-ui/core/Typography';
import Section from '../Section';
import Carousel from '../Carousel/Carousel';

// style
import './style.scss';

const dataArray = [
  {
    text: 'Golden apples from Jerzy in Krakow',
    src: 'https://www.eho.eu/wp-content/uploads/2018/10/jabolko_novo.jpg"',
  },
  {
    text: 'Sweet beetroots from Przemek in Gdansk',
    src:
      'https://www.ogrodinfo.pl/wp-content/uploads/2018/08/buraki_16_746.jpg',
  },
  { text: 'Tasty potatoes from Michal in Warsaw', src: 'https://n-16-1.dcs.redcdn.pl/scale/o2/tvn/web-content/m/p1/i/b432f34c5a997c8e7c806a895ecc5e25/d2788b1e-5131-4a94-910f-7e1b7d87a3bf.jpg?srcmode=0&srcx=1/20&srcy=1/1&srcw=87/100&srch=22/25&dstw=500&dsth=281&quality=80&type=1' },
];

export default function CarouselSection() {
  function getCarouselImages() {
    return dataArray.map(({ text, src }) => (
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
        Why is it worth it?
      </Typography>
      <Carousel>{getCarouselImages()}</Carousel>
    </Section>
  );
}
