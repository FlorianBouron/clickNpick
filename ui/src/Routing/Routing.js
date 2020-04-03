import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// constants
import { ROOT } from '../constants/routerConstants';

// pages
import LandingPage from '../Routes/LandingPage';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROOT}>
          <LandingPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
