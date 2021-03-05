import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { LoginPage } from './LoginPage';
import Profile from './profilePage';
import NavBar from './NavBar';

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
       <Router history={history}>
         <NavBar />
          <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path='/profile' component={Profile} />
              <Redirect from="*" to="/" />
          </Switch>
      </Router>        
    </div>
  );
}

export { App };
