import React from 'react';
import Person from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';

// style
import './style.scss';

// assets
import logo from '../../assets/images/logo.png';


export default function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <Button className="header__user">
        <Person />
      </Button>
    </div>
  );
}
