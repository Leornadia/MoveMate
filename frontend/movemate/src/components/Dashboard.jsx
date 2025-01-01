import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Dumbbell, Target, Book, Trophy, HelpCircle, LogOut, Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Dashboard() {
  const navigate = useNavigate();
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
  const [newGoal, setNewGoal] = useState({ name: '', progress: '' });
  const [newChallenge, setNewChallenge] = useState({ name: '', days: '', totalDays: '' });
  const [newMotivation, setNewMotivation] = useState('');

  const [showWorkoutForm, setShowWorkoutForm] = useState(false);
  const [showChallengeForm, setShowChallengeForm] = useState(false);
  const [showMotivationForm, setShowMotivationForm] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

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

  const handleJoinChallenge = () => {
    if (newChallenge.name && newChallenge.totalDays) {
      setChallenges([...challenges, { 
        id: challenges.length + 1, 
        name: newChallenge.name, 
        progress: 0, 
        days: 0, 
        totalDays: parseInt(newChallenge.totalDays) 
      }]);
      setNewChallenge({ name: '', totalDays: '' });
      setShowChallengeForm(false);
    }
  };

  const handleAddMotivation = () => {
    if (newMotivation) {
      setMotivation(newMotivation);
      setNewMotivation('');
      setShowMotivationForm(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gradient-peach-pink p-6 space-y-8 bg-black fixed h-full">
        <div className="flex items-center gap-2 mb-8">
          <Home className="h-6 w-6 text-gradient-peach-pink" />
          <span className="text-xl font-semibold text-gradient-peach-pink">MoveMate</span>
        </div>

        <nav className="space-y-6">
          {[
            { icon: Home, label: 'Dashboard', path: '/dashboard' },
            { icon: Dumbbell, label: 'Exercises', path: '/exercises' },
            { icon: Target, label: 'Goals', path: '/goals' },
            { icon: Book, label: 'Journal', path: '/journal' },
            { icon: Trophy, label: 'Challenges', path: '/challenges' },
            { icon: HelpCircle, label: 'Help', path: '/help' },
          ].map(({ icon: Icon, label, path }) => (
            <Button
              key={label}
              variant="ghost"
              className="w-full justify-start gap-3 text-gray-300 hover:text-gradient-peach-pink hover:bg-black/50"
              onClick={() => navigate(path)}
            >
              <Icon className="h-5 w-5" />
              {label}
            </Button>
          ))}

          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-gray-300 hover:text-gradient-peach-pink mt-8"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            Logout
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        <div className="grid grid-cols-2 gap-6">
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
                    className="bg-black/50 border-gradient-peach-pink text-white"
                  />
                  <Input 
                    type="number" 
                    placeholder="Duration (minutes)" 
                    value={newWorkout.duration}
                    onChange={(e) => setNewWorkout({...newWorkout, duration: e.target.value})}
                    className="bg-black/50 border-gradient-peach-pink text-white"
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleAddWorkout} className="bg-gradient-peach-pink text-white hover:bg-gradient-peach-pink-glow">
                      Add Workout
                    </Button>
                    <Button onClick={() => setShowWorkoutForm(false)} variant="outline" className="border-gradient-peach-pink text-gray-300">
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
              <CardTitle className="flex items-center gap-2 text-gradient-peach-pink">
                <Target className="h-5 w-5" />
                Goal Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {goals.map(goal => (
                <div key={goal.id} className="space-y-2">
                  <div className="flex justify-between text-gray-300">
                    <span>{goal.name}</span>
                    <span>{goal.progress}%</span>
                  </div>
                  <Progress value={goal.progress} className="h-2 bg-black border border-gradient-peach-pink [&>div]:bg-gradient-peach-pink" />
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
              <CardTitle className="flex items-center gap-2 text-gradient-peach-pink">
                <Trophy className="h-5 w-5" />
                Active Challenges
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {challenges.map(challenge => (
                <div key={challenge.id} className="p-4 bg-black/50 rounded-lg border border-gradient-peach-pink">
                  <h3 className="font-semibold text-gray-300">{challenge.name}</h3>
                  <p className="text-sm text-gray-400">Progress: {challenge.days}/{challenge.totalDays} days</p>
                  <Progress 
                    value={(challenge.days / challenge.totalDays) * 100} 
                    className="h-2 mt-2 bg-black border border-gradient-peach-pink [&>div]:bg-gradient-peach-pink" 
                  />
                </div>
              ))}
              {showChallengeForm ? (
                <div className="space-y-4">
                  <Input 
                    placeholder="Challenge Name" 
                    value={newChallenge.name}
                    onChange={(e) => setNewChallenge({...newChallenge, name: e.target.value})}
                    className="bg-black/50 border-gradient-peach-pink text-white"
                  />
                  <Input 
                    type="number" 
                    placeholder="Total Days" 
                    value={newChallenge.totalDays}
                    onChange={(e) => setNewChallenge({...newChallenge, totalDays: e.target.value})}
                    className="bg-black/50 border-gradient-peach-pink text-white"
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleJoinChallenge} className="bg-gradient-peach-pink text-white hover:bg-gradient-peach-pink-glow">
                      Join Challenge
                    </Button>
                    <Button onClick={() => setShowChallengeForm(false)} variant="outline" className="border-gradient-peach-pink text-gray-300">
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <Button onClick={() => setShowChallengeForm(true)} className="bg-gradient-peach-pink text-white hover:bg-gradient-peach-pink-glow">
                  Join Challenge
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Daily Motivation Card */}
          <Card className="bg-black border-gradient-peach-pink">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gradient-peach-pink">
                <Book className="h-5 w-5" />
                Daily Motivation
              </CardTitle>
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
                    className="bg-black/50 border-gradient-peach-pink text-white min-h-[100px]"
                  />
                  <div className="flex gap-2">
                    <Button onClick={handleAddMotivation} className="bg-gradient-peach-pink text-white hover:bg-gradient-peach-pink-glow">
                      Add Quote
                    </Button>
                    <Button onClick={() => setShowMotivationForm(false)} variant="outline" className="border-gradient-peach-pink text-gray-300">
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
      </main>
    </div>
  );
}
