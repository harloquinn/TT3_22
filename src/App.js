import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { LoginPage } from './LoginPage';
import BuySell from './BuySell/BuySellPage';

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
       <Router history={history}>
          <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/buysell" component={BuySell} />
              <Redirect from="*" to="/" />

          </Switch>
      </Router>        
    </div>
  );
}

export  {App};
