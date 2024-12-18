import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Clock, Users, Target } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

export default function Challenges() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Fitness Challenges</h1>
        <Button className="bg-[#800000] hover:bg-[#600000] text-white px-6">
          Create Challenge
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: '30-Day Consistency',
            progress: 60,
            days: '18/30',
            participants: 156,
            icon: Trophy
          },
          {
            title: '10K Steps Daily',
            progress: 80,
            days: '24/30',
            participants: 234,
            icon: Target
          },
          {
            title: 'Weight Training',
            progress: 40,
            days: '12/30',
            participants: 89,
            icon: Users
          },
          {
            title: 'Morning Yoga',
            progress: 90,
            days: '27/30',
            participants: 167,
            icon: Clock
          }
        ].map((challenge) => (
          <Card key={challenge.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <challenge.icon className="h-5 w-5 text-[#800000]" />
                {challenge.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{challenge.days} days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{challenge.participants} participants</span>
                </div>
              </div>
              <Progress value={challenge.progress} className="h-2" />
              <div className="flex justify-center">
                <Button className="bg-[#800000] hover:bg-[#600000] text-white px-6">
                  Join Challenge
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
