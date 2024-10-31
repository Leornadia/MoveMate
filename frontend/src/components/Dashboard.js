import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [recentExercises, setRecentExercises] = useState([]);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const exercisesResponse = await axios.get('/api/exercises/recent');
        setRecentExercises(exercisesResponse.data);

        const goalsResponse = await axios.get('/api/goals');
        setGoals(goalsResponse.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Exercises</h2>
          <ul>
            {recentExercises.map((exercise) => (
              <li key={exercise.id} className="mb-2">
                <span className="font-medium">{exercise.name}</span> - {exercise.duration} minutes on {new Date(exercise.date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Goals Progress</h2>
          {goals.map((goal) => (
            <div key={goal.id} className="mb-4">
              <p className="font-medium">{goal.description}</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${(goal.progress / goal.target) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm mt-1">{goal.progress} / {goal.target}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
