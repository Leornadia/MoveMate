import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dumbbell, ArrowLeft } from 'lucide-react';

export default function Dashboard() {
  const [workouts, setWorkouts] = useState([
    { id: 1, name: 'Running', duration: 30 },
    { id: 2, name: 'Weight Training', duration: 45 },
  ]);
  const [goals, setGoals] = useState([
    { id: 1, name: 'Weekly Exercise Goal', progress: 75 },
    { id: 2, name: 'Weight Goal', progress: 60 },
  ]);
  const [challenges, setChallenges] = useState([
    { id: 1, name: '30-Day Consistency', progress: 60, days: 18, totalDays: 30 },
  ]);
  const [motivation, setMotivation] = useState("The only bad workout is the one that didn't happen.");

  const [newWorkout, setNewWorkout] = useState({ name: '', duration: '' });
  const [showWorkoutForm, setShowWorkoutForm] = useState(false);
  const [showMotivationForm, setShowMotivationForm] = useState(false);
  const [newMotivation, setNewMotivation] = useState('');

  const handleAddWorkout = () => {
    if (newWorkout.name && newWorkout.duration) {
      setWorkouts([...workouts, { id: workouts.length + 1, ...newWorkout, duration: parseInt(newWorkout.duration) }]);
      setNewWorkout({ name: '', duration: '' });
      setShowWorkoutForm(false);
    }
  };

  const handleUpdateGoal = (id) => {
    setGoals(goals.map(goal =>
      goal.id === id ? { ...goal, progress: Math.min(100, goal.progress + 5) } : goal
    ));
  };

  const handleAddMotivation = () => {
    if (newMotivation) {
      setMotivation(newMotivation);
      setNewMotivation('');
      setShowMotivationForm(false);
    }
  };

  return (
    <div className="min-h-screen text-white p-8 relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://cdn.you.com/youagent-images/flux1_1-pro/2754a155-e32c-4e6d-9259-fda16fb47e74.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="relative z-10">
        <Outlet />
        <h1 className="text-3xl font-bold mb-6 text-gradient-peach-pink">Dashboard</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Workouts Card */}
          <Card className="bg-black border-gradient-peach-pink">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gradient-peach-pink">
                <Dumbbell className="h-5 w-5" />
                Recent Workouts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {workouts.map(workout => (
                <div key={workout.id} className="flex justify-between items-center text-gray-300">
                  <span>{workout.name}</span>
                  <span>{workout.duration} mins</span>
                </div>
              ))}
              {showWorkoutForm ? (
                <div className="space-y-4">
                  <Input
                    placeholder="Exercise Name"
                    value={newWorkout.name}
                    onChange={(e) => setNewWorkout({...newWorkout, name: e.target.value})}
                    className="bg-black border-gradient-peach-pink text-white focus:border-gradient-peach-pink"
                  />
                  <Input
                    type="number"
                    placeholder="Duration (minutes)"
                    value={newWorkout.duration}
                    onChange={(e) => setNewWorkout({...newWorkout, duration: e.target.value})}
                    className="bg-black border-gradient-peach-pink text-white focus:border-gradient-peach-pink"
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleAddWorkout} className="bg-gradient-peach-pink text-white hover:bg-gradient-peach-pink-glow">
                      Add Workout
                    </Button>
                    <Button onClick={() => setShowWorkoutForm(false)} variant="outline" className="border-gradient-peach-pink text-gray-300 hover:bg-gradient-peach-pink hover:text-white">
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <Button onClick={() => setShowWorkoutForm(true)} className="bg-gradient-peach-pink text-white hover:bg-gradient-peach-pink-glow">
                  Log Exercise
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Goal Progress Card */}
          <Card className="bg-black border-gradient-peach-pink">
            <CardHeader>
              <CardTitle className="text-gradient-peach-pink">Goal Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {goals.map(goal => (
                <div key={goal.id} className="space-y-2">
                  <div className="flex justify-between text-gray-300">
                    <span>{goal.name}</span>
                    <span>{goal.progress}%</span>
                  </div>
                  <Progress
                    value={goal.progress}
                    className="h-2 bg-black border border-gradient-peach-pink"
                    indicatorClassName="bg-gradient-peach-pink"
                  />
                </div>
              ))}
              <Button
                className="w-full bg-gradient-peach-pink text-white hover:bg-gradient-peach-pink-glow"
                onClick={() => goals.forEach(goal => handleUpdateGoal(goal.id))}
              >
                Update Goals
              </Button>
            </CardContent>
          </Card>

          {/* Active Challenges Card */}
          <Card className="bg-black border-gradient-peach-pink">
            <CardHeader>
              <CardTitle className="text-gradient-peach-pink">Active Challenges</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-black border border-gradient-peach-pink rounded-lg">
                <h3 className="font-semibold text-gradient-peach-pink">30-Day Consistency</h3>
                <p className="text-sm text-gray-300">Progress: 18/30 days</p>
                <Progress
                  value={60}
                  className="h-2 mt-2 bg-black border border-gradient-peach-pink"
                  indicatorClassName="bg-gradient-peach-pink"
                />
              </div>
              <Button className="w-full bg-gradient-peach-pink text-white hover:bg-gradient-peach-pink-glow">
                Join Challenge
              </Button>
            </CardContent>
          </Card>

          {/* Daily Motivation Card */}
          <Card className="bg-black border-gradient-peach-pink">
            <CardHeader>
              <CardTitle className="text-gradient-peach-pink">Daily Motivation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <blockquote className="italic text-gray-300">
                "{motivation}"
              </blockquote>
              {showMotivationForm ? (
                <div className="space-y-4">
                  <Textarea
                    placeholder="Enter your motivational quote"
                    value={newMotivation}
                    onChange={(e) => setNewMotivation(e.target.value)}
                    className="bg-black border-gradient-peach-pink text-white min-h-[100px] focus:border-gradient-peach-pink"
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleAddMotivation} className="bg-gradient-peach-pink text-white hover:bg-gradient-peach-pink-glow">
                      Add Quote
                    </Button>
                    <Button onClick={() => setShowMotivationForm(false)} variant="outline" className="border-gradient-peach-pink text-gray-300 hover:bg-gradient-peach-pink hover:text-white">
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <Button onClick={() => setShowMotivationForm(true)} className="bg-gradient-peach-pink text-white hover:bg-gradient-peach-pink-glow">
                  Add Entry
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
