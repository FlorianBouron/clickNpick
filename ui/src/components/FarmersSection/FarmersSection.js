import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


import Section from '../Section';

// style
import './style.scss';

export default function FarmersSection() {
  function getFarmerDescription() {
    return [1, 2].map(() => (
      <div className="farmers-section__description">
        <Avatar className="farmers-section__avatar" />
        <Typography variant="body1" component="body1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
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
