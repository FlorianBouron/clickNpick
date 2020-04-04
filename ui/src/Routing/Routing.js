import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// constants
import { ROOT, PRODUCT_LIST, PRODUCT } from '../constants/routerConstants';

// pages
import LandingPage from '../Routes/LandingPage';
import ProductListPage from '../Routes/ProductListPage';
import ProductPage from '../Routes/ProductPage';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROOT}>
          <LandingPage />
        </Route>
        <Route exact path={PRODUCT_LIST}>
          <ProductListPage />
        </Route>
        <Route exact path={PRODUCT}>
          <ProductPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
