import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';
// style
import './style.scss';

// components
import { Button } from '@material-ui/core';
import Section from '../Section';

// context
import CartContext from '../../contexts/CartContext';
import { API_URL } from '../../constants/apiConstants';
import { FARMERS_LIST } from '../../constants/routerConstants';

function CartList({ history }) {
  const { products, removeFromCart } = useContext(CartContext);
  const totalPrice = Number(
    Object.values(products).reduce(
      (acc, { quantity, price }) => acc + quantity * price,
      0,
    ),
  ).toFixed(2);

  return (
    <Section className="cart-list">
      <div className="cart-list__row cart-list__header">
        <div className="cart-list__column cart-list__column1" />
        <div className="cart-list__column cart-list__column2">
          <strong>Product</strong>
        </div>
        <div className="cart-list__column cart-list__column3">
          <strong>Paid</strong>
        </div>
        <div className="cart-list__column cart-list__column4" />
      </div>
      <div className="cart-list__products">
        {Object.values(products).map(
          ({
            name, price, quantity, unit, photo, id,
          }) => (
            <div className="cart-list__row cart-list-product-row">
              <div className="cart-list__column cart-list__column1">
                {/* {console.log(product)} */}
                <img
                  src={`${API_URL}/${photo.url}`}
                  alt={name}
                  className="cart-list__image"
                />
              </div>
              <div className="cart-list__column cart-list__column2">
                <Typography
                  className="cart-list-product__name"
                  variant="body1"
                  component="body1"
                >
                  {name}
                </Typography>
                <Typography
                  className="cart-list-product__quantity"
                  variant="body1"
                  component="body1"
                >
                  <span className="cart-list-product__quantity-value">
                    {quantity}
                  </span>
                  {unit}
                </Typography>
                <Typography
                  className="cart-list-product__price-per-unit"
                  variant="body1"
                  component="body1"
                >
                  {price}
                  zl/
                  {unit}
                </Typography>
              </div>
              <div className="cart-list__column cart-list__column3">
                <Typography
                  className="cart-list-product__price"
                  variant="body1"
                  component="body1"
                >
                  {Number(quantity * price).toFixed(2)}
                  zl
                </Typography>
              </div>
              <div className="cart-list__column cart-list__column4">
                <Button>
                  <ClearIcon
                    fontSize="large"
                    onClick={() => removeFromCart(id)}
                  />
                </Button>
              </div>
            </div>
          ),
        )}
        <div className="cart-list__row cart-list__sum">
          <div className="cart-list__column cart-list__column1" />
          <div className="cart-list__column cart-list__column2">
            <Typography
              className="cart-list-product__price"
              variant="body1"
              component="body1"
            >
              Total
            </Typography>
          </div>
          <div className="cart-list__column cart-list__column3">
            <Typography
              className="cart-list-product__price"
              variant="body1"
              component="body1"
            >
              {totalPrice}
              zł
            </Typography>
          </div>
          <div className="cart-list__column cart-list__column4" />
        </div>
      </div>
      <div className="cart-list__checkout">
        <Button
          onClick={() => history.push(`${FARMERS_LIST}?city=Krakow`)}
          className="cart-list__continue-btn"
        >
          Continue shopping
        </Button>
        {Number(totalPrice) ? (
          <Button className="cart-list__checkout-btn">Go to checkout</Button>
        ) : null}
      </div>
    </Section>
  );
}

export default withRouter(CartList);
