import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Dumbbell, Target, Book, Trophy, HelpCircle, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function Dashboard() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-100 p-6 space-y-8">
        <div className="flex items-center gap-2 mb-8">
          <Home className="h-6 w-6" />
          <span className="text-xl font-semibold">MoveMate</span>
        </div>

        <nav className="space-y-6">
          <Button variant="ghost" className="w-full justify-start gap-3" onClick={() => navigate('/dashboard')}>
            <Home className="h-5 w-5" />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3" onClick={() => navigate('/exercises')}>
            <Dumbbell className="h-5 w-5" />
            Exercises
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3" onClick={() => navigate('/goals')}>
            <Target className="h-5 w-5" />
            Goals
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3" onClick={() => navigate('/journal')}>
            <Book className="h-5 w-5" />
            Journal
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3" onClick={() => navigate('/challenges')}>
            <Trophy className="h-5 w-5" />
            Challenges
          </Button>

          <div className="pt-8 space-y-6">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <HelpCircle className="h-5 w-5" />
              Help
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <LogOut className="h-5 w-5" />
              Logout
            </Button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="grid grid-cols-2 gap-6">
          {/* Recent Workouts Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Dumbbell className="h-5 w-5 text-[#800000]" />
                Recent Workouts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-between items-center">
                <span>Running</span>
                <span className="text-gray-500">30 mins</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Weight Training</span>
                <span className="text-gray-500">45 mins</span>
              </div>
              <Button className="w-full bg-[#800000] hover:bg-[#600000] text-white">
                Log New Exercise
              </Button>
            </CardContent>
          </Card>

          {/* Goal Progress Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-[#800000]" />
                Goal Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Weekly Exercise Goal</span>
                  <span>75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Weight Goal</span>
                  <span>60%</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              <Button className="w-full bg-[#800000] hover:bg-[#600000] text-white">
                Update Goals
              </Button>
            </CardContent>
          </Card>

          {/* Active Challenges Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-[#800000]" />
                Active Challenges
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold">30-Day Consistency</h3>
                <p className="text-sm text-gray-600">Progress: 18/30 days</p>
                <Progress value={60} className="h-2 mt-2" />
              </div>
              <Button className="w-full bg-[#800000] hover:bg-[#600000] text-white">
                Join New Challenge
              </Button>
            </CardContent>
          </Card>

          {/* Daily Motivation Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="h-5 w-5 text-[#800000]" />
                Daily Motivation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <blockquote className="italic text-gray-600">
                "The only bad workout is the one that didn't happen."
              </blockquote>
              <Button className="w-full bg-[#800000] hover:bg-[#600000] text-white">
                Write in Journal
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
