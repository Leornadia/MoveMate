import React from 'react';

function Goals() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Fitness Goals</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-white shadow-sm p-4">
          <h2 className="font-semibold">Weight Goals</h2>
          <p className="text-sm text-gray-500">Track your weight progress</p>
        </div>
        <div className="rounded-lg border bg-white shadow-sm p-4">
          <h2 className="font-semibold">Workout Goals</h2>
          <p className="text-sm text-gray-500">Set and track exercise targets</p>
        </div>
        <div className="rounded-lg border bg-white shadow-sm p-4">
          <h2 className="font-semibold">Habit Goals</h2>
          <p className="text-sm text-gray-500">Build consistent fitness habits</p>
        </div>
      </div>
    </div>
  );
}

export default Goals;
