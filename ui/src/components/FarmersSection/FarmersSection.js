import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


import Section from '../Section';

// style
import './style.scss';

// assets
import farmer from '../../assets/images/farmer.png';
import femaleFarmer from '../../assets/images/female_farmer.png';

const dataArray = [{
  src: farmer,
  text: 'Lukasz – Click & Farm brought me the capacity to sell my beautiful products online, without building a costly e-commerce website. I got more new clients than I was dreaming to.',
},
{
  src: femaleFarmer,
  text: 'Gosia – I reconnected with our community thanks to Click & Farm, now my boxes is a meeting point, and when I’m busy in the field, my clients take their package by themselves. Very clever!',
},

];

export default function FarmersSection() {
  function getFarmerDescription() {
    return dataArray.map(({ text, src }) => (
      <div className="farmers-section__description">
        <Avatar className="farmers-section__avatar" src={src} />
        <Typography variant="body1" component="body1">
          {text}
        </Typography>
      </div>
    ));
  }


  return (
    <Section className="farmers-section">
      {getFarmerDescription()}
    </Section>
  );
}
