import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import RedeemIcon from '@material-ui/icons/Redeem';

// style
import './style.scss';

// components
import Section from '../Section/Section';

export default function InstructionSection() {
  return (
    <Section className="instruction-section">
      <div>
        <ShoppingCartIcon fontSize="Large" />
        <Typography>Order</Typography>
      </div>
      <ArrowForwardIosIcon fontSize="Large" />
      <div>
        <PhoneAndroidIcon fontSize="Large" />
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
