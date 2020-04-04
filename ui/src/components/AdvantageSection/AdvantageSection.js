import React from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';

// style
import './style.scss';

// components
import Section from '../Section/Section';

export default function AdvantageSection() {
  function getSectionCards() {
    return [1, 2, 3].map(() => (
      <Card className="advantage-section__card">
        <Avatar className="advantage-section__avatar" />
        <Typography variant="body1" component="body1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </Typography>
      </Card>
    ));
  }

  return (
    <Section className="advantage-section">
      <Typography variant="h3" component="h3" className="advantage-section__header">
        Why is it worth it?
      </Typography>
      {getSectionCards()}
    </Section>
  );
}
