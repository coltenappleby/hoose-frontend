import '../App.css';
import HomePage from "./HomePage.js"
import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ZipCodeList from './ZipCodeList';
import UserShow from './UserShow';
import ZipCodeShow from './ZipCodeShow';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/zipcodes">
          <ZipCodeList />
        </Route>
        <Route exact path="/users/:id">
          <UserShow />
        </Route>
        <Route exact path="/zipcodes/:id">
          <ZipCodeShow />
        </Route>



      </Switch>
    </Router>


    </>
  );
}

export default App;
