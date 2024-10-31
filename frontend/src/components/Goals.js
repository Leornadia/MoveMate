import React from 'react';

function Goals() {
  const goals = [
    { id: 1, description: 'Run 5km without stopping', completed: false },
    { id: 2, description: 'Do 50 push-ups in one set', completed: false },
    { id: 3, description: 'Maintain a daily stretching routine for 30 days', completed: true },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Fitness Goals</h2>
      <ul className="space-y-4">
        {goals.map((goal) => (
          <li key={goal.id} className="flex items-center bg-secondary p-4 rounded-lg">
            <input
              type="checkbox"
              checked={goal.completed}
              readOnly
              className="mr-4"
            />
            <span className={goal.completed ? 'line-through' : ''}>{goal.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Goals;
