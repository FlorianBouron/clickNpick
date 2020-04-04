import React from 'react';
import Typography from '@material-ui/core/Typography';

// style
import './style.scss';

export default function HeroBanner() {
  return (
    <div className="hero-banner">
      <Typography variant="h1" component="h1">
        {'From a Farmer\nmeans\nfrom heart'}
      </Typography>
    </div>
  );
}
