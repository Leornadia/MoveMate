import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">MoveMate</Link>
        <div className="space-x-4">
          <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
          <Link to="/exercises" className="text-white hover:text-gray-300">Exercises</Link>
          <Link to="/goals" className="text-white hover:text-gray-300">Goals</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
