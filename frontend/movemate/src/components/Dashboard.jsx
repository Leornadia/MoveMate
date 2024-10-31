import React from 'react'

function Dashboard() {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Your Fitness Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Today's Progress</h3>
          <p>Track your daily achievements here.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Weekly Goals</h3>
          <p>Monitor your goal progress here.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Fitness Streak</h3>
          <p>Keep your momentum going!</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
