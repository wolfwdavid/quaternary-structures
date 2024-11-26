import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/proteins">Proteins</Link></li>
        <li><Link to="/add-protein">Add Protein</Link></li>
        <li><Link to="/visualize">Visualize</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
