import React from 'react';

import { Switch, Route } from 'react-router-dom';

import ProductsList from './pages/ProductsList';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={ProductsList} />
  </Switch>
);

export default Routes;
