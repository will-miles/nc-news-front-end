import React from 'react';
import logo from '../nc-logo.png';

const Header = () => {
  return (
    <div className="header">
      <img className="headerLogo" src={logo} alt="logo"></img>
      <h1>NC News</h1>
    </div>
  );
};

export default Header;
