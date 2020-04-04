import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// constants
import { ROOT, PRODUCT_LIST } from '../constants/routerConstants';

// pages
import LandingPage from '../Routes/LandingPage';
import ProductListPage from '../Routes/ProductListPage';

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
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
