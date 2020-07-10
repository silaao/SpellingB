import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrepareGame from '../pages/PrepareGame';
// import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import LevelScreen from '../pages/LevelScreen';
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/LevelScreen" component={LevelScreen} />
      <Route path="/PrepareGame" component={PrepareGame} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
