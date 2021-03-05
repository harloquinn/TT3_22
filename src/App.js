import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createBrowserHistory } from 'history';
import { LoginPage } from './LoginPage';

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
       <Router history={history}>
          <Switch>
              <Route path="/login" component={LoginPage} />
              <Redirect from="*" to="/" />
          </Switch>
      </Router>        
    </div>
  );
}

export { App };
