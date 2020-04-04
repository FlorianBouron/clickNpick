import React, { useState, useRef, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// style
import './style.scss';

// components
import Section from '../Section/Section';

// constants
import {
  PLACES_CLIENT_ID,
  PLACES_AUTOCOMPLETE_KEY,
} from '../../constants/apiConstants';
import { PRODUCT_LIST } from '../../constants/routerConstants';

const places = require('places.js');

export default withRouter(({ history }) => {
  const inputEl = useRef(null);
  const [latLng, setLatLng] = useState(null);
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    const { current } = inputEl;
    const placesAutocomplete = places({
      appId: PLACES_CLIENT_ID,
      apiKey: PLACES_AUTOCOMPLETE_KEY,
      container: current,
      countries: ['pl'],
    });

    placesAutocomplete.on('change', (e) => {
      const {
        suggestion: { latlng },
      } = e;
      setLatLng(latlng);
    });
  }, []);

  function handleClick() {
    if (latLng) {
      setInputError(false);
      history.push(PRODUCT_LIST);
    } else {
      setInputError(true);
    }
  }

  return (
    <Section className="address-search-section">
      <Typography variant="body1" component="body1" className="MB-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text.
      </Typography>
      <input
        type="search"
        ref={inputEl}
        id="address-input"
        placeholder="Type your address"
        className="email-address-section__input"
        required={inputError}
      />
      {inputError ? (
        <Typography
          variant="body1"
          component="body1"
          className="address-search-section__error"
        >
          Please fill address field
        </Typography>
      ) : null}
      <Button
        className="address-search-section__button"
        variant="contained"
        color="secondary"
        onClick={handleClick}
      >
        Find my closest farm
      </Button>
    </Section>
  );
});
