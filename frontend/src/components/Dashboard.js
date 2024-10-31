import React from 'react';

function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Fitness Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-white shadow-sm p-4">
          <h2 className="font-semibold">Today's Progress</h2>
          <p className="text-sm text-gray-500">Track your daily achievements</p>
        </div>
        <div className="rounded-lg border bg-white shadow-sm p-4">
          <h2 className="font-semibold">Weekly Goals</h2>
          <p className="text-sm text-gray-500">Monitor your goal progress</p>
        </div>
        <div className="rounded-lg border bg-white shadow-sm p-4">
          <h2 className="font-semibold">Fitness Streak</h2>
          <p className="text-sm text-gray-500">Keep your momentum going</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
