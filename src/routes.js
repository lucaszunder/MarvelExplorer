import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Hero from './pages/Hero';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/hero/:id" component={Hero} />
    </Switch>
  );
}
