import React from 'react';
import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';
// style
import './style.scss';

// components
import { Button } from '@material-ui/core';
import Section from '../Section';

export default function CartList() {
  const products = [1, 2];
  return (
    <Section className="cart-list">
      <div className="cart-list__row cart-list__header">
        <div className="cart-list__column cart-list__column1" />
        <div className="cart-list__column cart-list__column2">Product</div>
        <div className="cart-list__column cart-list__column3">Paid</div>
        <div className="cart-list__column cart-list__column4" />
      </div>
      <div className="cart-list__products">
        {products.map(() => (
          <div className="cart-list__row cart-list-product-row">
            <div className="cart-list__column cart-list__column1">
              <img
                src="https://www.eho.eu/wp-content/uploads/2018/10/jabolko_novo.jpg"
                alt="apple"
                className="cart-list__image"
              />
            </div>
            <div className="cart-list__column cart-list__column2">
              <Typography
                className="cart-list-product__name"
                variant="body1"
                component="body1"
              >
                Jablka
              </Typography>
              <Typography
                className="cart-list-product__quantity"
                variant="body1"
                component="body1"
              >
                <span className="cart-list-product__quantity-value">1</span>
                kg
              </Typography>
              <Typography
                className="cart-list-product__price-per-unit"
                variant="body1"
                component="body1"
              >
                10zl/kg
              </Typography>
            </div>
            <div className="cart-list__column cart-list__column3">
              <Typography
                className="cart-list-product__price"
                variant="body1"
                component="body1"
              >
                10zl
              </Typography>
            </div>
            <div className="cart-list__column cart-list__column4">
              <Button>
                <ClearIcon fontSize="large" />
              </Button>
            </div>
          </div>
        ))}
        <div className="cart-list__row cart-list__sum">
          <div className="cart-list__column cart-list__column1" />
          <div className="cart-list__column cart-list__column2">Product</div>
          <div className="cart-list__column cart-list__column3">
            <Typography
              className="cart-list-product__price"
              variant="body1"
              component="body1"
            >
              10zl
            </Typography>
          </div>
          <div className="cart-list__column cart-list__column4" />
        </div>
      </div>
    </Section>
  );
}
