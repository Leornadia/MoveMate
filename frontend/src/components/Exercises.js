import React from 'react';

function Exercises() {
  const exercises = [
    { id: 1, name: 'Push-ups', sets: 3, reps: 10 },
    { id: 2, name: 'Squats', sets: 3, reps: 15 },
    { id: 3, name: 'Plank', sets: 3, duration: '30 seconds' },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Exercise Library</h2>
      <ul className="space-y-4">
        {exercises.map((exercise) => (
          <li key={exercise.id} className="bg-secondary p-4 rounded-lg">
            <h3 className="text-xl font-semibold">{exercise.name}</h3>
            <p>Sets: {exercise.sets}</p>
            <p>{exercise.reps ? `Reps: ${exercise.reps}` : `Duration: ${exercise.duration}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Exercises;
