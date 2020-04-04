import React from 'react';
import { Switch, Route } from 'react-router-dom';

// constants
import {
  ROOT, PRODUCT, FARMERS_LIST,
} from '../constants/routerConstants';

// pages
import LandingPage from '../Routes/LandingPage';
import FarmersListPage from '../Routes/FarmersListPage';
import ProductPage from '../Routes/ProductPage';

// components
import { CartContextProvider } from '../contexts/CartContext/CartContext';

function Router() {
  return (
    <CartContextProvider>
      <Switch>
        <Route exact path={ROOT}>
          <LandingPage />
        </Route>
        <Route exact path={FARMERS_LIST}>
          <FarmersListPage />
        </Route>
        <Route exact path={PRODUCT}>
          <ProductPage />
        </Route>
      </Switch>
    </CartContextProvider>
  );
}

export default Router;
