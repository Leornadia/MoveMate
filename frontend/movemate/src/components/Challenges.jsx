import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trophy, Clock, Users, Target, Plus } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

export default function Challenges() {
  const [challenges, setChallenges] = useState([
    {
      id: 1,
      title: '30-Day Consistency',
      progress: 60,
      days: '18/30',
      participants: 156,
      icon: Trophy
    },
    {
      id: 2,
      title: '10K Steps Daily',
      progress: 80,
      days: '24/30',
      participants: 234,
      icon: Target
    },
    {
      id: 3,
      title: 'Weight Training',
      progress: 40,
      days: '12/30',
      participants: 89,
      icon: Users
    },
    {
      id: 4,
      title: 'Morning Yoga',
      progress: 90,
      days: '27/30',
      participants: 167,
      icon: Clock
    }
  ]);

  const [showNewChallengeForm, setShowNewChallengeForm] = useState(false);
  const [newChallenge, setNewChallenge] = useState({ title: '', days: '' });

  const handleCreateChallenge = (e) => {
    e.preventDefault();
    const id = challenges.length + 1;
    setChallenges([...challenges, {
      id,
      title: newChallenge.title,
      progress: 0,
      days: `0/${newChallenge.days}`,
      participants: 1,
      icon: Trophy
    }]);
    setNewChallenge({ title: '', days: '' });
    setShowNewChallengeForm(false);
  };

  const handleJoinChallenge = (id) => {
    setChallenges(challenges.map(challenge =>
      challenge.id === id
        ? { ...challenge, participants: challenge.participants + 1 }
        : challenge
    ));
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gradient-peach-pink">Fitness Challenges</h1>
        <Button
          className="bg-gradient-peach-pink text-white hover:bg-gradient-peach-pink-glow"
          onClick={() => setShowNewChallengeForm(true)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Create Challenge
        </Button>
      </div>

      {showNewChallengeForm && (
        <Card className="mb-6 bg-black border-gradient-peach-pink">
          <CardHeader>
            <CardTitle className="text-gradient-peach-pink">Create New Challenge</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreateChallenge} className="space-y-4">
              <div>
                <Input
                  placeholder="Challenge Title"
                  value={newChallenge.title}
                  onChange={(e) => setNewChallenge({...newChallenge, title: e.target.value})}
                  required
                  className="bg-black/50 border-gradient-peach-pink text-white"
                />
              </div>
              <div>
                <Input
                  type="number"
                  placeholder="Number of Days"
                  value={newChallenge.days}
                  onChange={(e) => setNewChallenge({...newChallenge, days: e.target.value})}
                  required
                  className="bg-black/50 border-gradient-peach-pink text-white"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setShowNewChallengeForm(false)} className="border-gradient-peach-pink text-gray-300">
                  Cancel
                </Button>
                <Button type="submit" className="bg-gradient-peach-pink text-white hover:bg-gradient-peach-pink-glow">
                  Create Challenge
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {challenges.map((challenge) => (
          <Card key={challenge.id} className="bg-black border-gradient-peach-pink">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-gradient-peach-pink">
                <challenge.icon className="h-5 w-5" />
                {challenge.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{challenge.days} days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{challenge.participants} participants</span>
                </div>
              </div>
              <Progress value={challenge.progress} className="h-2 bg-black border border-gradient-peach-pink [&>div]:bg-gradient-peach-pink" />
              <div className="flex justify-center">
                <Button
                  className="bg-gradient-peach-pink text-white hover:bg-gradient-peach-pink-glow"
                  onClick={() => handleJoinChallenge(challenge.id)}
                >
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
