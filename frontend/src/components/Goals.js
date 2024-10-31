import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Goals() {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState({ description: '', target: '', deadline: '' });

  useEffect(() => {
    fetchGoals();
  }, []);

  const fetchGoals = async () => {
    try {
      const response = await axios.get('/api/goals');
      setGoals(response.data);
    } catch (error) {
      console.error('Error fetching goals:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGoal(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/goals', newGoal);
      setNewGoal({ description: '', target: '', deadline: '' });
      fetchGoals();
    } catch (error) {
      console.error('Error adding goal:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Fitness Goals</h1>
      
      <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="description"
            value={newGoal.description}
            onChange={handleInputChange}
            placeholder="Goal description"
            className="p-2 border rounded"
            required
          />
          <input
            type="number"
            name="target"
            value={newGoal.target}
            onChange={handleInputChange}
            placeholder="Target value"
            className="p-2 border rounded"
            required
          />
          <input
            type="date"
            name="deadline"
            value={newGoal.deadline}
            onChange={handleInputChange}
            className="p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Add Goal
        </button>
      </form>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {goals.map((goal) => (
          <div key={goal.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{goal.description}</h3>
            <p className="text-gray-600">Target: {goal.target}</p>
            <p className="text-gray-600">Deadline: {new Date(goal.deadline).toLocaleDateString()}</p>
            <div className="mt-4">
              <div className="text-sm text-gray-600 mb-1">Progress: {goal.progress} / {goal.target}</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-green-600 h-2.5 rounded-full" 
                  style={{ width: `${(goal.progress / goal.target) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Goals;
