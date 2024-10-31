import React from 'react'

function Goals() {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Fitness Goals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Weight Goals</h3>
          <p>Track your weight progress here.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Workout Goals</h3>
          <p>Set and track exercise targets.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Habit Goals</h3>
          <p>Build consistent fitness habits.</p>
        </div>
      </div>
    </div>
  )
}

export default Goals