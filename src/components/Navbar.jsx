import React from "react";
import logo from "../utilities/logo.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar navbar-light bg-light">
      <div className="container">
        <div className="d-flex gap-4 align-items-center">
          <img style={{ width: "50px" }} src={logo} alt="" />
          <h4>Space Traveler's Hub</h4>
        </div>
        <div className="d-flex gap-4" >
          <NavLink to='/rockets'>Rockets</NavLink>         
          <NavLink to='*'>Missions</NavLink>
          <span>|</span>
          <NavLink to='myprofile'>My profile</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
