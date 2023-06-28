import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../utilities/logo.png';

function Navbar() {
  const [link, setLink] = useState(null);

  const handleClick = (id) => {
    setLink(id);
  };

  return (
    <div className="navbar navbar-light bg-light">
      <div className="container">
        <div className="d-flex gap-4 align-items-center">
          <img style={{ width: '50px' }} src={logo} alt="" />
          <h4>Space Traveler's Hub</h4>
        </div>
        <div className="d-flex gap-4 links-container">
          <NavLink className={link === 1 ? 'underline' : ''} onClick={() => handleClick(1)} to="/rockets">
            Rockets
          </NavLink>
          <NavLink className={link === 2 ? 'underline' : ''} onClick={() => handleClick(2)} to="/missions">
            Missions
          </NavLink>
          <span>| </span>
          <NavLink className={link === 3 ? 'underline' : ''} onClick={() => handleClick(3)} to="myprofile">
            My profile
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
