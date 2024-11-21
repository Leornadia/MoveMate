import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

function Exercises() {
  const [exercises, setExercises] = useState([])
  const [newExercise, setNewExercise] = useState({ name: '', duration: '', type: '', calories: '' })

  const handleInputChange = (e) => {
    setNewExercise({ ...newExercise, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setExercises([...exercises, { ...newExercise, id: Date.now() }])
    setNewExercise({ name: '', duration: '', type: '', calories: '' })
  }

  const handleDelete = (id) => {
    setExercises(exercises.filter(exercise => exercise.id !== id))
  }

  // Mock data for the chart
  const chartData = [
    { name: 'Mon', calories: 300 },
    { name: 'Tue', calories: 450 },
    { name: 'Wed', calories: 200 },
    { name: 'Thu', calories: 500 },
    { name: 'Fri', calories: 350 },
    { name: 'Sat', calories: 600 },
    { name: 'Sun', calories: 400 },
  ]

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Exercise Library</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
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

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Log Your Exercise</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Exercise Name</Label>
              <Input
                id="name"
                name="name"
                value={newExercise.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="duration">Duration (minutes)</Label>
              <Input
                id="duration"
                name="duration"
                type="number"
                value={newExercise.duration}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="type">Type of Exercise</Label>
              <Input
                id="type"
                name="type"
                value={newExercise.type}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="calories">Calories Burned</Label>
              <Input
                id="calories"
                name="calories"
                type="number"
                value={newExercise.calories}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button type="submit">Log Exercise</Button>
          </form>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Your Logged Exercises</CardTitle>
        </CardHeader>
        <CardContent>
          {exercises.map((exercise) => (
            <div key={exercise.id} className="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded">
              <div>
                <strong>{exercise.name}</strong> - {exercise.duration} mins, {exercise.type}, {exercise.calories} calories
              </div>
              <Button variant="destructive" onClick={() => handleDelete(exercise.id)}>Delete</Button>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="calories" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

export default Exercises
