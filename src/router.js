import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Clients from './pages/Clients';
import Home from './pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/clients' exact component={Clients} />
      </Switch>
    </BrowserRouter>
  );
}
