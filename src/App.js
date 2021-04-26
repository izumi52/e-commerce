import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/homepage.component';
const Details = () => (
  <div>Details</div>
)
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop/' component={Details} />
      </Switch>
    </div>
  );
}

export default App;
