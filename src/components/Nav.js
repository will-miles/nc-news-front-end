import React from 'react';
import { Link } from '@reach/router';

const Nav = () => {
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
};

export default Nav;
