import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">MoveMate</Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-blue-200">Home</Link>
          </li>
          <li>
            <Link to="/dashboard" className="text-white hover:text-blue-200">Dashboard</Link>
          </li>
          <li>
            <Link to="/exercises" className="text-white hover:text-blue-200">Exercises</Link>
          </li>
          <li>
            <Link to="/goals" className="text-white hover:text-blue-200">Goals</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
