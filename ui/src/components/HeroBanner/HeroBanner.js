import React from 'react';
import Typography from '@material-ui/core/Typography';

// style
import './style.scss';

// components
import Section from '../Section/Section';

export default function HeroBanner() {
  return (
    <Section className="hero-banner">
      <Typography variant="h1" component="h1">
        {'From a Farmer\nmeans\nfrom heart'}
      </Typography>
    </Section>
  );
}
