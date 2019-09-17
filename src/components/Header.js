import React from 'react';
import logo from '../nc-logo.png';

const Header = () => {
  return (
    <h1 className="header">
      <img className="headerLogo" src={logo} alt="logo"></img> NC News
    </h1>
  );
};

export default Header;
