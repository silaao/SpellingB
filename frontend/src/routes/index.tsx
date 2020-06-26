import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/SignUp" component={SignUp} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
