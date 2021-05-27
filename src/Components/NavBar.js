import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div className="nav-bar">
      <NavLink
        to="/"
        exact
        activeStyle = {{
          background: "rgb(186, 197, 206)"
        }}
      >
        Home
      </NavLink>
      <NavLink to={`/users/${window.sessionStorage.getItem("currentUserId")}`} exact >
        User Page
      </NavLink>
      <NavLink to="/zipcodes" exact >
        Zip Codes Index
      </NavLink>
      <NavLink to="/job_searches" exact >
        Job Search Index
      </NavLink>
    </div>
  )
}

export default NavBar;