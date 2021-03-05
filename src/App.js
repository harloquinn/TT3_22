import React, { useState, useEffect } from 'react';
import Profile from './profilePage';
import NavBar from './NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {

  return (
    <div className="App">
      <Router>
      <NavBar />
      <Switch>
      <Profile />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
