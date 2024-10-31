import React from 'react'

function Exercises() {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Exercise Library</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Cardio</h3>
          <p>Running, cycling, swimming, and more.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Strength Training</h3>
          <p>Weight lifting and resistance training.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Flexibility</h3>
          <p>Yoga and stretching exercises.</p>
        </div>
      </div>
    </div>
  )
}

export default Exercises
