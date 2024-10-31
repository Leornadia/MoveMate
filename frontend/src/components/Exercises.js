import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Exercises() {
  const [exercises, setExercises] = useState([]);
  const [newExercise, setNewExercise] = useState({ name: '', duration: '', date: '' });

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => {
    try {
      const response = await axios.get('/api/exercises');
      setExercises(response.data);
    } catch (error) {
      console.error('Error fetching exercises:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExercise(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/exercises', newExercise);
      setNewExercise({ name: '', duration: '', date: '' });
      fetchExercises();
    } catch (error) {
      console.error('Error adding exercise:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Exercises</h1>
      
      <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            value={newExercise.name}
            onChange={handleInputChange}
            placeholder="Exercise name"
            className="p-2 border rounded"
            required
          />
          <input
            type="number"
            name="duration"
            value={newExercise.duration}
            onChange={handleInputChange}
            placeholder="Duration (minutes)"
            className="p-2 border rounded"
            required
          />
          <input
            type="date"
            name="date"
            value={newExercise.date}
            onChange={handleInputChange}
            className="p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Exercise
        </button>
      </form>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{exercise.name}</h3>
            <p className="text-gray-600">Duration: {exercise.duration} minutes</p>
            <p className="text-gray-600">Date: {new Date(exercise.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exercises;
