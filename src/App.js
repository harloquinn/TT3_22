import React, { useState, useEffect } from 'react';
import Profile from './profilePage';
import NavBar from './NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { LoginPage } from './LoginPage';
import BuySell from './BuySell/BuySellPage';

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <Router history={history}>
      <NavBar />
        <Switch>
          <Profile exact path='/' component={Profile}/>
          <LoginPage exact path='/login' component={LoginPage}/>
          <BuySell exact path="/buysell" component={BuySell} />
        </Switch>
      </Router>
    </div>
  );
}

export  {App};
