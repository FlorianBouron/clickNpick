import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import RedeemIcon from '@material-ui/icons/Redeem';
import PhoneAndroidSharpIcon from '@material-ui/icons/PhoneAndroidSharp';


// style
import './style.scss';

// components
import Section from '../Section/Section';

export default function LandingPageInstruction() {
  return (
    <Section className="landing-page-instruction">
      <div>
        <ShoppingCartIcon fontSize="Large" />
        <Typography>Order</Typography>
      </div>
      <ArrowForwardIosIcon fontSize="Large" />
      <div>
        <PhoneAndroidSharpIcon fontSize="Large" />
        <Typography>Get notification</Typography>
      </div>
      <ArrowForwardIosIcon fontSize="Large" />
      <div>
        <RedeemIcon fontSize="Large" />
        <Typography>Collect</Typography>
      </div>

    </Section>
  );
}
