import React from "react";
import logo from "../utilities/logo.png";

function Navbar() {
  return (
    <div className="navbar navbar-light bg-light">
      <div className="container">
        <div className="d-flex gap-4 align-items-center">
          <img style={{ width: "50px" }} src={logo} alt="" />
          <h4>Space Traveler's Hub</h4>
        </div>
        <div className="d-flex gap-4" >
          <a href="#">Rockets</a>
          <a href="#">Missions</a>
          <a href="#">My Profile</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
