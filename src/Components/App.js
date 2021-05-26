import '../App.css';
import HomePage from "./HomePage.js"
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ZipCodeList from './ZipCodeList';
import UserShow from './UserShow';
import ZipCodeShow from './ZipCodeShow';
import JobSearchList from './JobSearchList';

function App() {
  
  const [zipCodes, setZipCodes] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/zip_codes")
    .then(res => res.json())
    .then(data => {
      setZipCodes(data)
    })
  }, [])


  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage zipCodes ={zipCodes} setZipCodes = {setZipCodes} />
        </Route>
        <Route exact path="/zipcodes">
          <ZipCodeList />
        </Route>
        <Route exact path="/users/:id">
          <UserShow allZipCodes= {zipCodes} />
        </Route>
        <Route exact path="/zipcodes/:id">
          <ZipCodeShow />
        </Route>
        <Route exact path="/job_searches">
          <JobSearchList />
        </Route>



      </Switch>
    </Router>


    </>
  );
}

export default App;
