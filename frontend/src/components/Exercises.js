import React from 'react';

function Exercises() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Exercise Library</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-white shadow-sm p-4">
          <h2 className="font-semibold">Cardio</h2>
          <p className="text-sm text-gray-500">Running, cycling, swimming, and more</p>
        </div>
        <div className="rounded-lg border bg-white shadow-sm p-4">
          <h2 className="font-semibold">Strength Training</h2>
          <p className="text-sm text-gray-500">Weight lifting and resistance training</p>
        </div>
        <div className="rounded-lg border bg-white shadow-sm p-4">
          <h2 className="font-semibold">Flexibility</h2>
          <p className="text-sm text-gray-500">Yoga and stretching exercises</p>
        </div>
      </div>
    </div>
  );
}

export default Exercises;
