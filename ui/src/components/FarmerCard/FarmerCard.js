import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

// style
import './style.scss';

export default function FarmerCard({
  id,
  name,
  description,
  coordinates,
  picture,
  products,
}) {
  return (
    <Card className="farmer-card">
      <div className="farmer-card__column1">
        <Typography variant="subtitle1" component="h2">
          {name}
        </Typography>
        <Avatar
          src={picture}
          alt="pig"
        />
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </div>
      <div className="farmer-card__column2">
        <Typography variant="subtitle1" component="h2">
          Products
        </Typography>
        <div className="farmer-card__images">
          {products.map(() => (
            <div className="farmer-card__image">
              <Avatar
                src="data:image/png;base64,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"
                alt="pig"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="farmer-card__footer">
        <Button className="farmer-card__footer--map-button">
          <LocationOnIcon />
        </Button>
        <Button
          variant="contained"
          color="primary"
          className="farmer-card__footer--shop-button"
        >
          Shop
        </Button>
      </div>
    </Card>
  );
}
