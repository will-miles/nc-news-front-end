import React, { Component } from 'react';
import { Link } from '@reach/router';

class Nav extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="navBar">
        <Link to="/">
          <button>All</button>
        </Link>
        <Link to="/topics">
          <button>Topics</button>
        </Link>
      </div>
    );
  }
}

export default Nav;
