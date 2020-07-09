import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrepareGame from '../pages/PrepareGame';
// import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={PrepareGame} />
      <Route path="/SignUp" component={SignUp} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
