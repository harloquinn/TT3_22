import React, { useState, useEffect } from 'react';
import Profile from './profilePage';
import NavBar from './NavBar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { LoginPage } from './LoginPage';


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
