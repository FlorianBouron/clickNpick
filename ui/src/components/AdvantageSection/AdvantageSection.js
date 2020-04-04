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
    text:
      'We installed automatic lockers at each of our farms. When your order is ready you’ll receive the password to pick up your package within 24h. A secured way to avoid contact during the COVID19 pandemi, because we care about the wellbeing of our clients.',
    src: lockers,
  },
  {
    text:
      'Click & Farm brings an online sales channel to every farmers, decreasing the dependency of public market, supermarkets and exportation. Thanks to your order, you’re helping your local community.',
    src: vegetables,
  },
  {
    text:
      'Why eating food produced hundreds kilometers away when you can have quality products close to you? Be smart, shop online, choose local!',
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
