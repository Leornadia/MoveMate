import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6.5 6.5h11" />
            <path d="M6.5 17.5h11" />
            <path d="M3 10h18" />
            <path d="M3 14h18" />
          </svg>
          <span>MoveMate</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link to="/dashboard" className="text-sm font-medium hover:underline">
            Dashboard
          </Link>
          <Link to="/exercises" className="text-sm font-medium hover:underline">
            Exercises
          </Link>
          <Link to="/goals" className="text-sm font-medium hover:underline">
            Goals
          </Link>
        </nav>
      </div>
    </nav>
  );
}

export default Navbar;
