import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrepareGame from '../pages/PrepareGame';
// import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import LevelScreen from '../pages/LevelScreen';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={PrepareGame} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/LevelScreen" component={LevelScreen} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
