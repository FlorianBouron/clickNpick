import React from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';

// style
import './style.scss';

// components
import Section from '../Section/Section';

// assets
import vegetables from '../../assets/images/vegetables.png';
import basket from '../../assets/images/basket.png';
import lockers from '../../assets/images/lockers.png';

const texts = [
  {
    text: "We have lockers on all the farms we cooperate with. You'll get a notification after placing an order & have 24h to pick it up. It is the highest safety standard, especially in difficult times like now during COVID-19 outburst.",
    src: lockers,
  },
  {
    text: 'The Click & Farm idea helps local farmers grow along with their customers by decreasing dependency on markets. Supporting our idea means getting the most healthy food possible, without unnecessary mediators.',
    src: vegetables,
  },
  {
    text: "Polish farmers are expected to be the main source of Europe's food supply soon. By helping them you help your country become more rich every day.Polish farmers are expected to be the main source of Europe's food supply soon. By helping them you help your country become more rich every day.",
    src: basket,
  },
];

export default function AdvantageSection() {
  function getSectionCards() {
    return texts.map(({ text, src }) => (
      <Card className="advantage-section__card">
        <Avatar
          className="advantage-section__avatar"
          src={src}
          variant="square"
        />
        <Typography variant="body1" component="body1">
          {text}
        </Typography>
      </Card>
    ));
  }

  return (
    <Section className="advantage-section">
      <Typography
        variant="h3"
        component="h3"
        className="advantage-section__header"
      >
        Why is it worth it?
      </Typography>
      {getSectionCards()}
    </Section>
  );
}
