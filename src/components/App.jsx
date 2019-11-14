import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import './App.css';

function App(){
  return (
    <div className="contentContainer">
      <NavBar />
      <div className="contentMain">
        <Switch>
          <Route exact path='/' component={NavBar} />
          {/* <Route path='/hotpicks' component={} /> */}
        </Switch>
      </div>

      <div className="test"></div>
    </div>
  );
}

export default App;