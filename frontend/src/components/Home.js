import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to MoveMate</h1>
      <p className="text-xl mb-8">Track your fitness journey and achieve your goals with ease.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/exercises" className="bg-blue-500 text-white p-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          <h2 className="text-2xl font-semibold mb-2">Log Exercises</h2>
          <p>Record your workouts and track your progress over time.</p>
        </Link>
        
        <Link to="/goals" className="bg-green-500 text-white p-6 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
          <h2 className="text-2xl font-semibold mb-2">Set Goals</h2>
          <p>Define and monitor your fitness objectives.</p>
        </Link>
        
        <Link to="/dashboard" className="bg-purple-500 text-white p-6 rounded-lg shadow-md hover:bg-purple-600 transition duration-300">
          <h2 className="text-2xl font-semibold mb-2">View Dashboard</h2>
          <p>Get an overview of your fitness journey and achievements.</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
