import React, { useState, useEffect } from 'react';
import Profile from './profilePage';
import NavBar from './NavBar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { LoginPage } from './LoginPage';
import BuySell from './BuySell/BuySellPage';
import Home from './homePage';

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <Router history={history}>
      <NavBar />
        <Switch>
          <Profile exact path='/profile' component={Profile}/>
          <LoginPage exact path='/login' component={LoginPage}/>
          <BuySell exact path="/buysell" component={BuySell} />
          <Home path='/' component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export  {App};
