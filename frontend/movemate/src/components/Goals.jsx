import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Target } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

export default function Goals() {
  const [goals, setGoals] = useState([
    { id: 1, title: 'Weight Goal', current: 68, target: 65, progress: 60 },
    { id: 2, title: 'Weekly Workouts', current: 3, target: 4, progress: 75 },
    { id: 3, title: 'Running Distance', current: 15, target: 20, progress: 75 },
    { id: 4, title: 'Strength Training', current: 2, target: 3, progress: 66 },
  ]);
  const [newGoal, setNewGoal] = useState({ title: '', current: '', target: '' });
  const [showNewGoalForm, setShowNewGoalForm] = useState(false);

  const handleAddGoal = () => {
    if (newGoal.title && newGoal.current && newGoal.target) {
      const current = parseFloat(newGoal.current);
      const target = parseFloat(newGoal.target);
      const progress = Math.round((current / target) * 100);
      setGoals([...goals, { id: goals.length + 1, ...newGoal, current, target, progress }]);
      setNewGoal({ title: '', current: '', target: '' });
      setShowNewGoalForm(false);
    }
  };

  const handleUpdateGoal = (id, increment) => {
    setGoals(goals.map(goal => {
      if (goal.id === id) {
        const newCurrent = Math.max(0, Math.min(goal.current + increment, goal.target));
        const newProgress = Math.round((newCurrent / goal.target) * 100);
        return { ...goal, current: newCurrent, progress: newProgress };
      }
      return goal;
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gradient-peach-pink">Fitness Goals</h1>
        <Button
          className="bg-gradient-peach-pink text-white hover:bg-gradient-peach-pink-glow"
          onClick={() => setShowNewGoalForm(true)}
        >
          Add New Goal
        </Button>
      </div>

      {showNewGoalForm && (
        <Card className="mb-6 bg-black border-gradient-peach-pink">
          <CardHeader>
            <CardTitle className="text-gradient-peach-pink">Add New Goal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Goal Title"
              value={newGoal.title}
              onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
              className="bg-black/50 border-gradient-peach-pink text-white"
            />
            <Input
              type="number"
              placeholder="Current Value"
              value={newGoal.current}
              onChange={(e) => setNewGoal({ ...newGoal, current: e.target.value })}
              className="bg-black/50 border-gradient-peach-pink text-white"
            />
            <Input
              type="number"
              placeholder="Target Value"
              value={newGoal.target}
              onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })}
              className="bg-black/50 border-gradient-peach-pink text-white"
            />
            <Button className="bg-gradient-peach-pink text-white hover:bg-gradient-peach-pink-glow" onClick={handleAddGoal}>
              Add Goal
            </Button>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {goals.map((goal) => (
          <Card key={goal.id} className="bg-black border-gradient-peach-pink">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gradient-peach-pink">
                <Target className="h-5 w-5" />
                {goal.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-sm text-gray-300">
                <span>Current: {goal.current}</span>
                <span>Target: {goal.target}</span>
              </div>
              <Progress value={goal.progress} className="h-2 bg-black border border-gradient-peach-pink [&>div]:bg-gradient-peach-pink" />
              <div className="flex justify-center space-x-2">
                <Button
                  className="bg-gradient-peach-pink text-white hover:bg-gradient-peach-pink-glow px-4"
                  onClick={() => handleUpdateGoal(goal.id, -1)}
                >
                  -
                </Button>
                <Button
                  className="bg-gradient-peach-pink text-white hover:bg-gradient-peach-pink-glow px-4"
                  onClick={() => handleUpdateGoal(goal.id, 1)}
                >
                  +
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
