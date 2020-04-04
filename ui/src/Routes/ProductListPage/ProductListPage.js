import React, { useEffect, useState } from 'react';

// components
import FarmerCard from '../../components/FarmerCard';

// constants
import { API_URL, FARMERS_ENDPOINT } from '../../constants/apiConstants';

export default function ProductListPage() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    window
      .fetch(`${API_URL}${FARMERS_ENDPOINT}`)
      .then((response) => response.json())
      .then((res) => {
        setProductsList(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {productsList.map(
        ({
          id, name, description, coordinates, picture, products,
        }) => (
          <FarmerCard
            key={id}
            id={id}
            name={name}
            description={description}
            coordinates={coordinates}
            picture={picture}
            products={products}
          />
        ),
      )}
    </div>
  );
}
