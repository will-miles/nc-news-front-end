import React, { Component } from 'react';
import { Link } from '@reach/router';

class Nav extends Component {
  state = {
    users: []
  };
  render() {
    return (
      <div className="navBar">
        <select></select>
        <Link to="/">
          <button>All</button>
        </Link>
        <Link to="/topics">
          <button>Topics</button>
        </Link>
        <input placeholder="Search for acrticle"></input>
        <button>Go</button>
      </div>
    );
  }
}

export default Nav;
