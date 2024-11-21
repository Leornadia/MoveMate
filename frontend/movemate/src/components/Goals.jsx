import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

function Goals() {
  const [goals, setGoals] = useState([])
  const [newGoal, setNewGoal] = useState({ description: '', target: '', progress: 0 })

  const handleInputChange = (e) => {
    setNewGoal({ ...newGoal, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setGoals([...goals, { ...newGoal, id: Date.now() }])
    setNewGoal({ description: '', target: '', progress: 0 })
  }

  const updateProgress = (id, newProgress) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, progress: Math.min(newProgress, 100) } : goal
    ))
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Fitness Goals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
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

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Set a New Goal</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="description">Goal Description</Label>
              <Input
                id="description"
                name="description"
                value={newGoal.description}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="target">Target (e.g., number of workouts, weight)</Label>
              <Input
                id="target"
                name="target"
                value={newGoal.target}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button type="submit">Set Goal</Button>
          </form>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Current Goals</CardTitle>
        </CardHeader>
        <CardContent>
          {goals.map((goal) => (
            <div key={goal.id} className="mb-4">
              <h3 className="font-bold">{goal.description}</h3>
              <p>Target: {goal.target}</p>
              <Progress value={goal.progress} className="mt-2" />
              <div className="mt-2">
                <Button onClick={() => updateProgress(goal.id, goal.progress + 10)} className="mr-2">
                  Update Progress
                </Button>
                <span>{goal.progress}% Complete</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Completed Goals</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            {goals.filter(goal => goal.progress === 100).map((goal) => (
              <li key={goal.id}>{goal.description} - Achieved {goal.target}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

export default Goals
