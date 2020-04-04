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
import { FARMERS_LIST } from '../../constants/routerConstants';

const places = require('places.js');

export default withRouter(({ history }) => {
  const inputEl = useRef(null);
  const [latLng, setLatLng] = useState(null);
  const [city, setCity] = useState(null);
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
        suggestion: { latlng, name },
      } = e;
      setCity(name);
      setLatLng(latlng);
    });
  }, []);

  function handleClick() {
    if (latLng) {
      setInputError(false);
      history.push(`${FARMERS_LIST}?city=${city}`);
    } else {
      setInputError(true);
    }
  }

  return (
    <Section className="address-search-section">
      <Typography variant="h6" component="h6" className="address-search-section__header MB-3">
        {'Put your address in a box below\nto look for some fresh and\ndelicious food in your area.'}
      </Typography>
      <input
        type="search"
        ref={inputEl}
        id="address-input"
        placeholder="Type your address here"
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
