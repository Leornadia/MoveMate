import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Dumbbell, Target, Flame, Trophy, Book, Quote } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="p-6 bg-[#FFDAB9] min-h-screen">
      <h1 className="text-3xl font-bold text-[#36454F] mb-6">Welcome back, User!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Exercise Logs */}
        <Card className="bg-[#F4A460]">
          <CardHeader>
            <CardTitle className="flex items-center text-[#36454F]">
              <Dumbbell className="mr-2" /> Recent Workouts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <span>Running</span>
                <span>30 mins</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Weightlifting</span>
                <span>45 mins</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Goal Progress */}
        <Card className="bg-[#F4A460]">
          <CardHeader>
            <CardTitle className="flex items-center text-[#36454F]">
              <Target className="mr-2" /> Goal Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>Weight Loss</span>
                  <span>70%</span>
                </div>
                <Progress value={70} className="bg-[#FFDAB9]" indicatorClassName="bg-[#800000]" />
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>Muscle Gain</span>
                  <span>40%</span>
                </div>
                <Progress value={40} className="bg-[#FFDAB9]" indicatorClassName="bg-[#800000]" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Current Streak */}
        <Card className="bg-[#F4A460]">
          <CardHeader>
            <CardTitle className="flex items-center text-[#36454F]">
              <Flame className="mr-2" /> Current Streak
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <span className="text-4xl font-bold text-[#800000]">7</span>
              <p>days</p>
            </div>
          </CardContent>
        </Card>

        {/* Challenges */}
        <Card className="bg-[#F4A460]">
          <CardHeader>
            <CardTitle className="flex items-center text-[#36454F]">
              <Trophy className="mr-2" /> Challenges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>30-Day Plank Challenge</li>
              <li>10K Steps Daily</li>
            </ul>
            <Button className="mt-4 bg-[#800000] hover:bg-[#A52A2A] text-white">Join New Challenge</Button>
          </CardContent>
        </Card>

        {/* Fitness Journal */}
        <Card className="bg-[#F4A460]">
          <CardHeader>
            <CardTitle className="flex items-center text-[#36454F]">
              <Book className="mr-2" /> Fitness Journal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Last entry: Feeling great after today's workout!</p>
            <Button className="bg-[#800000] hover:bg-[#A52A2A] text-white">New Entry</Button>
          </CardContent>
        </Card>

        {/* Daily Quote */}
        <Card className="bg-[#F4A460]">
          <CardHeader>
            <CardTitle className="flex items-center text-[#36454F]">
              <Quote className="mr-2" /> Daily Quote
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="italic">"The only bad workout is the one that didn't happen."</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
