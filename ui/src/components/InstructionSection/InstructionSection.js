import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import RedeemIcon from '@material-ui/icons/Redeem';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

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
        <AssignmentTurnedInIcon fontSize="Large" />
        <Typography>Checkout</Typography>
      </div>
      <ArrowForwardIosIcon fontSize="Large" />
      <div>
        <CreditCardIcon fontSize="Large" />
        <Typography>Payment</Typography>
      </div>
      <ArrowForwardIosIcon fontSize="Large" />
      <div>
        <CheckCircleIcon fontSize="Large" />
        <Typography>Success</Typography>
      </div>
    </Section>
  );
}
