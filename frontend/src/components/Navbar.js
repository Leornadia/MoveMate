import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-primary text-primary-foreground p-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
        <li><Link to="/exercises" className="hover:underline">Exercises</Link></li>
        <li><Link to="/goals" className="hover:underline">Goals</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
