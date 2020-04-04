import React from 'react';
import { withRouter } from 'react-router-dom';
import Person from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import ButtonLink from '@material-ui/core/Link';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// style
import './style.scss';

// assets
import logo from '../../assets/images/logo.png';

// constants
import { ROOT } from '../../constants/routerConstants';

export default withRouter(({ history }) => (
  <div className="header">
    <Button className="header__user">
      <ShoppingCartIcon />
    </Button>
    <ButtonLink
      className="header__link"
      onClick={() => history.push(ROOT)}
      alt="home page"
    >
      <img className="header__logo" src={logo} alt="logo" />
    </ButtonLink>
    <Button className="header__user">
      <Person />
    </Button>
  </div>
));
