import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CerealsPage from './CerealsPage';
import CerealDetail from './CerealDetail';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <CerealsPage />
          </Route>
          <Route exact path="/cereals/:id">
            <CerealDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
