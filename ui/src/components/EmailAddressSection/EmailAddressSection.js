import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// style
import './style.scss';

// components
import Section from '../Section/Section';

export default function EmailAddressSection() {
  return (
    <Section className="email-address-section">
      <Typography variant="p" component="p" className="MB-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text.
      </Typography>
      <TextField
        id="filled-basic"
        label="address"
        variant="filled"
        fullWidth
        className="email-address-section__input MB-3"
      />
      <Button
        className="email-address-section__button"
        variant="contained"
        color="secondary"
      >
        Find my closest farm
      </Button>
    </Section>
  );
}
