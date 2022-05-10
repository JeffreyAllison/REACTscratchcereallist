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
            {/* this home page route should list all the beanies */}
          </Route>
          <Route exact path="/cereals/:id">
            <CerealDetail />
            {/* this route should point to a particular beanie baby by id and render that specific BeanieDetail page */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
