import React, { useEffect, useState, useContext } from 'react';

// components
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Section from '../../components/Section';

// constants
import { API_URL, PRODUCT_ENDPOINT } from '../../constants/apiConstants';

// context
import CartContext from '../../contexts/CartContext';

// styles
import './style.scss';

// components
import CarouselSection from '../../components/CarouselSection';

// mock data
const dataArray = [
  {
    text: 'Golden apples from Jerzy in Krakow',
    src: 'https://www.eho.eu/wp-content/uploads/2018/10/jabolko_novo.jpg"',
  },
  {
    text: 'Sweet beetroots from Przemek in Gdansk',
    src:
      'https://www.ogrodinfo.pl/wp-content/uploads/2018/08/buraki_16_746.jpg',
  },
  {
    text: 'Tasty potatoes from Michal in Warsaw',
    src:
      'https://n-16-1.dcs.redcdn.pl/scale/o2/tvn/web-content/m/p1/i/b432f34c5a997c8e7c806a895ecc5e25/d2788b1e-5131-4a94-910f-7e1b7d87a3bf.jpg?srcmode=0&srcx=1/20&srcy=1/1&srcw=87/100&srch=22/25&dstw=500&dsth=281&quality=80&type=1',
  },
];

export default function ProductPage() {
  const [productData, setProductData] = useState({});
  const [numberOfProduct, setNumberOfProduct] = useState(0);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    window
      .fetch(`${API_URL}${PRODUCT_ENDPOINT}/1`)
      .then((response) => response.json())
      .then((res) => {
        setProductData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleAddProductToCart = () => {
    const quantity = numberOfProduct;
    console.log(quantity);
    addToCart(productData);
  };

  const {
    name, price, photo, description, unit,
  } = productData;

  return (
    <div>
      <Section className="product-page">
        {Object.keys(productData).length ? (
          <>
            <img
              src={`${API_URL}${photo.url}`}
              alt="product"
              className="product-page__image"
            />
            <Typography
              variant="h4"
              component="h1"
              className="product-page__name"
            >
              {name}
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              className="product-page__price"
            >
              {price}
              {' '}
              zł /
              {unit}
            </Typography>
            <div className="product-page__counter">
              <div className="product-page__buttons">
                <Button
                  variant="contained"
                  onClick={() => {
                    if (numberOfProduct > 0) {
                      setNumberOfProduct(numberOfProduct - 1);
                    }
                  }}
                >
                  -
                </Button>
                <span className="product-page__quantity">
                  {numberOfProduct}
                </span>
                <Button
                  variant="contained"
                  onClick={() => setNumberOfProduct(numberOfProduct + 1)}
                >
                  +
                </Button>
              </div>

              <Button
                className="product-page__add-button"
                variant="contained"
                onClick={() => handleAddProductToCart()}
              >
                Add to basket
              </Button>
            </div>

            <Typography
              variant="h6"
              component="h3"
              className="product-page__description-title"
            >
              Description:
            </Typography>
            <Typography
              className="product-page__description-text"
              variant="body2"
              color="textSecondary"
              component="body2"
            >
              {description}
            </Typography>
          </>
        ) : null}
      </Section>
      <CarouselSection
        title={'Product which\ncustomers love'}
        data={dataArray}
      />
    </div>
  );
}
