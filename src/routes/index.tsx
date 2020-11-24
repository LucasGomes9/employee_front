import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import List from '../pages/List';
import CreateEmployees from '../pages/CreateEmployees';
import Details from '../pages/Details';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/list" exact component={List} />
    <Route path="/create" exact component={CreateEmployees} />
    <Route path="/details/:id" exact component={Details} />
  </Switch>
);

export default Routes;
