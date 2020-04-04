import React, { useEffect, useState, useContext } from 'react';

// components
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// constants
import { API_URL, PRODUCT_ENDPOINT } from '../../constants/apiConstants';

// context
import CartContext from '../../contexts/CartContext';

// styles
import './style.scss';

export default function ProductPage() {
  const [productData, setProductData] = useState(null);
  const [numberOfProduct, setNumberOfProduct] = useState(0);

  const addToCart = useContext(CartContext);
  console.log({ addToCart });

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
    productData.quantity = numberOfProduct;
    addToCart(productData);
  };

  return (
    <div>
      {
      productData ? (
        <Card>
          <CardMedia
            className="product-page__media"
            style={{
              height: 0,
              paddingTop: '56.25%', // 16:9
            }}
            image={`${API_URL}${productData.photo.url}`}
            title={productData.name}
          />
          <CardContent>
            <Typography variant="h4" component="h1">
              {productData.name}
            </Typography>
            <Typography variant="h5" component="h2">
              {productData.price}
              {' '}
              zł
              /
              {productData.unit}
            </Typography>
            <Typography variant="h6" component="h3">
              Amount:
            </Typography>
            <div>
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
              {numberOfProduct}
              <Button
                variant="contained"
                onClick={() => setNumberOfProduct(numberOfProduct + 1)}
              >
                +
              </Button>
              <Button
                variant="contained"
                onClick={() => handleAddProductToCart()}
              >
                Add to basket

              </Button>
            </div>
            <Typography variant="h6" component="h3">
              Description:
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {productData.description}
            </Typography>
          </CardContent>
        </Card>
      ) : null
      }
    </div>
  );
}
