import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

// components
import FarmerCard from '../../components/FarmerCard';

// constants
import { API_URL, FARMERS_ENDPOINT } from '../../constants/apiConstants';
import Section from '../../components/Section';

// styles
import './style.scss';

export default function FarmersListPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const cityName = urlParams.get('city');

  const [farmersList, setFarmersList] = useState([]);

  useEffect(() => {
    window
      .fetch(`${API_URL}${FARMERS_ENDPOINT}`)
      .then((response) => response.json())
      .then((res) => {
        setFarmersList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Section className="farmers-list">
      <TextField
        fullWidth
        placeholder="Search for farm category or product"
        className="farmers-list__input"
      />
      <Typography variant="h3" component="h3" className="farmers-list__header">
        {`Farmers in the\narea of ${cityName}`}
      </Typography>
      {farmersList.map(
        ({
          id, name, description, coordinates, picture, products,
        }) => (
          <FarmerCard
            key={`farmer-${id}`}
            id={id}
            name={name}
            description={description}
            coordinates={coordinates}
            picture={picture}
            products={products}
          />
        ),
      )}
    </Section>
  );
}
