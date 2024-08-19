import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div classname="nav">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/work">Work </Link></li>
            <li><Link to="/skills">Skills </Link></li>
            <li><Link to="/resources">Resources </Link></li>
            <li><Link to="/dev">Developer Setup </Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar;
