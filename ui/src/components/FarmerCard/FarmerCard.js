import React from 'react';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Map from '@material-ui/icons/Map';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CarouselVertical from '../CarouselVertical';

// style
import './style.scss';

// constants
import { API_URL } from '../../constants/apiConstants';
import { PRODUCT_LIST } from '../../constants/routerConstants';

function FarmerCard({
  id,
  name,
  description,
  coordinates,
  picture,
  products,
  history,
}) {
  return (
    <div className="farmer-card">
      <Card>
        <div className="farmer-card__row1">
          <div className="farmer-card__column1">
            <Typography variant="subtitle1" component="h2" className="farmer-card__header">
              {name}
            </Typography>
            <Avatar
              src={`${API_URL}${picture.url}`}
              alt="Farm Avatar"
              variant="square"
              className="farmer-card__avatar"
            />
            <Typography variant="body2" component="body2" className="farmer-card__description">
              {description}
            </Typography>
            <Button className="farmer-card__footer--map-button">
              <Map />
            </Button>
          </div>
          <div className="farmer-card__column2">
            <Typography variant="subtitle1" component="h2" className="farmer-card__header">
              Products
            </Typography>
            <div className="farmer-card__images">
              <CarouselVertical>
                {[1, 2, 3, 4, 5].map(() => (
                  <div>
                    <div className="farmer-card__image-wrapper">
                      <Avatar
                        src="https://media.istockphoto.com/photos/this-farm-is-my-pride-and-joy-picture-id904559680?k=6&m=904559680&s=612x612&w=0&h=qJ24psKCPjKzwPzDqGdeG7beRnqe8fIH3R-3-_yX8gI="
                        alt="pig"
                        className="farmer-card__image-avatar"
                        variant="square"
                      />
                    </div>
                  </div>
                ))}
              </CarouselVertical>
            </div>
          </div>
        </div>

        <div className="farmer-card__footer">
          <Button
            variant="contained"
            color="primary"
            className="farmer-card__footer--shop-button"
            onClick={() => history.push(PRODUCT_LIST)}
          >
            Buy from this farmer
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default withRouter(FarmerCard);
