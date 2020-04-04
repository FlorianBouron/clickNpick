import React from 'react';
import { withRouter } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

// styles
import './style.scss';
import { PRODUCT_PAGE } from '../../constants/routerConstants';

function ProductListPageCard({ history }) {
  return (
    <Card className="product-list-page-card">
      <img
        className="product-list-page-card__image"
        src="https://res.cloudinary.com/grohealth/image/upload/v1583748171/DCUK/Content/iStock-857145602.jpg"
        alt="product"
      />
      <Typography variant="body2" component="body2" className="product-list-page-card__description">
        Very nice fruits
      </Typography>
      <Typography variant="body1" component="body1" className="product-list-page-card__price">
        15 zl/kg
      </Typography>
      <div className="product-list-page-card__footer">
        <TextField label="Quantity" className="product-list-page-card__quantity" />
        <Button onClick={() => history.push(PRODUCT_PAGE)}>Add</Button>
      </div>
    </Card>
  );
}

export default withRouter(ProductListPageCard);
