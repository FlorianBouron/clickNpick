import React from 'react';
import { withRouter } from 'react-router-dom';

// components
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

// constants
import { API_URL } from '../../constants/apiConstants';

// styles
import './style.scss';
import { PRODUCT_PAGE } from '../../constants/routerConstants';

function ProductListPageCard({ history, product }) {
  return (
    <Card className="product-list-page-card">
      <img
        className="product-list-page-card__image"
        src={`${API_URL}${product.photo.url}`}
        alt="product"
      />
      <Typography variant="body2" component="body2" className="product-list-page-card__description">
        {product.description}
      </Typography>
      <Typography variant="body1" component="body1" className="product-list-page-card__price">
        {product.price}
        {' '}
        zl/
        {product.unit}
      </Typography>
      <div className="product-list-page-card__footer">
        <TextField label="Quantity" className="product-list-page-card__quantity" />
        <Button onClick={() => history.push(PRODUCT_PAGE)}>Add</Button>
      </div>
    </Card>
  );
}

export default withRouter(ProductListPageCard);
