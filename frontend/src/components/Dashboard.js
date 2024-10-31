import React from 'react';

function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Fitness Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-secondary p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Today's Progress</h3>
          <p>You've completed 2 out of 3 planned exercises.</p>
        </div>
        <div className="bg-secondary p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Weekly Goal</h3>
          <p>4 out of 7 days active this week.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
