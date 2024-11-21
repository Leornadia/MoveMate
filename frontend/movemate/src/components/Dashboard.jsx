import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Dumbbell, Target, Calendar, Book, Trophy, HelpCircle, LogOut } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Dashboard() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("Leornadia");
  const [activeModal, setActiveModal] = useState(null);

  const handleLogout = () => {
    // Implement logout logic here
    navigate('/');
  };

  const handleSubmit = (event, type) => {
    event.preventDefault();
    // Implement form submission logic here
    console.log(`Submitting ${type}`);
    setActiveModal(null);
  };

  const renderModal = () => {
    if (!activeModal) return null;

    let title, content;
    switch (activeModal) {
      case 'exercise':
        title = 'Log New Exercise';
        content = (
          <form onSubmit={(e) => handleSubmit(e, 'exercise')}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="exercise-type">Exercise Type</Label>
                <Input id="exercise-type" />
              </div>
              <div>
                <Label htmlFor="duration">Duration (minutes)</Label>
                <Input id="duration" type="number" />
              </div>
              <Button type="submit">Log Exercise</Button>
            </div>
          </form>
        );
        break;
      case 'goal':
        title = 'Update Goals';
        content = (
          <form onSubmit={(e) => handleSubmit(e, 'goal')}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="weekly-goal">Weekly Exercise Goal (hours)</Label>
                <Input id="weekly-goal" type="number" />
              </div>
              <div>
                <Label htmlFor="weight-goal">Weight Goal (kg)</Label>
                <Input id="weight-goal" type="number" />
              </div>
              <Button type="submit">Update Goals</Button>
            </div>
          </form>
        );
        break;
      case 'challenge':
        title = 'Join New Challenge';
        content = (
          <form onSubmit={(e) => handleSubmit(e, 'challenge')}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="challenge-name">Challenge Name</Label>
                <Input id="challenge-name" />
              </div>
              <div>
                <Label htmlFor="challenge-duration">Duration (days)</Label>
                <Input id="challenge-duration" type="number" />
              </div>
              <Button type="submit">Join Challenge</Button>
            </div>
          </form>
        );
        break;
      case 'journal':
        title = 'Write in Journal';
        content = (
          <form onSubmit={(e) => handleSubmit(e, 'journal')}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="journal-entry">Today's Entry</Label>
                <textarea id="journal-entry" className="w-full h-32 p-2 border rounded" />
              </div>
              <Button type="submit">Save Entry</Button>
            </div>
          </form>
        );
        break;
      default:
        return null;
    }

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          {content}
          <Button onClick={() => setActiveModal(null)} className="mt-4">Close</Button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 px-4 py-6">
        <div className="flex items-center mb-8">
          <span className="text-2xl font-bold text-[#800000]">MoveMate</span>
        </div>
        
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/dashboard')}>
            <Home className="h-5 w-5 mr-2" />
            <span>Dashboard</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/exercises')}>
            <Dumbbell className="h-5 w-5 mr-2" />
            <span>Exercises</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/goals')}>
            <Target className="h-5 w-5 mr-2" />
            <span>Goals</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/journal')}>
            <Book className="h-5 w-5 mr-2" />
            <span>Journal</span>
          </Button>
          <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/challenges')}>
            <Trophy className="h-5 w-5 mr-2" />
            <span>Challenges</span>
          </Button>
          
          <div className="pt-8">
            <Button variant="ghost" className="w-full justify-start" onClick={() => navigate('/help')}>
              <HelpCircle className="h-5 w-5 mr-2" />
              <span>Help</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={handleLogout}>
              <LogOut className="h-5 w-5 mr-2" />
              <span>Logout</span>
            </Button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Welcome to your dashboard, {userName}!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Exercise Summary Card */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Dumbbell className="h-5 w-5 mr-2 text-[#800000]" />
                Recent Workouts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Running</span>
                  <span className="text-gray-600">30 mins</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Weight Training</span>
                  <span className="text-gray-600">45 mins</span>
                </div>
                <Button className="w-full bg-[#800000] hover:bg-[#600000] text-white" onClick={() => setActiveModal('exercise')}>
                  Log New Exercise
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Goals Progress Card */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Target className="h-5 w-5 mr-2 text-[#800000]" />
                Goal Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Weekly Exercise Goal</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Weight Goal</span>
                    <span>60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <Button className="w-full bg-[#800000] hover:bg-[#600000] text-white" onClick={() => setActiveModal('goal')}>
                  Update Goals
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Challenges Card */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Trophy className="h-5 w-5 mr-2 text-[#800000]" />
                Active Challenges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-[#fff5f5] rounded-lg">
                  <h3 className="font-semibold">30-Day Consistency</h3>
                  <p className="text-sm text-gray-600">Progress: 18/30 days</p>
                  <Progress value={60} className="h-2 mt-2" />
                </div>
                <Button className="w-full bg-[#800000] hover:bg-[#600000] text-white" onClick={() => setActiveModal('challenge')}>
                  Join New Challenge
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Daily Quote Card */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Book className="h-5 w-5 mr-2 text-[#800000]" />
                Daily Motivation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <blockquote className="italic text-gray-600">
                "The only bad workout is the one that didn't happen."
              </blockquote>
              <div className="mt-4">
                <Button className="w-full bg-[#800000] hover:bg-[#600000] text-white" onClick={() => setActiveModal('journal')}>
                  Write in Journal
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {renderModal()}
    </div>
  );
}
