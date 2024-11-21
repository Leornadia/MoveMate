import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

function Challenges() {
  const [challenges, setChallenges] = useState([
    { id: 1, name: '30-Day Push-Up Challenge', joined: false, progress: 0 },
    { id: 2, name: '10,000 Steps Daily', joined: false, progress: 0 },
    { id: 3, name: 'Yoga for 30 Minutes Every Day', joined: false, progress: 0 },
  ])

  const joinChallenge = (id) => {
    setChallenges(challenges.map(challenge => 
      challenge.id === id ? { ...challenge, joined: true } : challenge
    ))
  }

  const updateProgress = (id) => {
    setChallenges(challenges.map(challenge => 
      challenge.id === id ? { ...challenge, progress: Math.min(challenge.progress + 3.33, 100) } : challenge
    ))
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">Fitness Challenges</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {challenges.map((challenge) => (
          <Card key={challenge.id}>
            <CardHeader>
              <CardTitle>{challenge.name}</CardTitle>
            </CardHeader>
            <CardContent>
              {challenge.joined ? (
                <div>
                  <Progress value={challenge.progress} className="mb-2" />
                  <p className="mb-2">Day {Math.floor(challenge.progress / 3.33)} of 30 completed</p>
                  <Button onClick={() => updateProgress(challenge.id)}>Update Progress</Button>
                </div>
              ) : (
                <Button onClick={() => joinChallenge(challenge.id)}>Join Challenge</Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Active Challenges</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            {challenges.filter(c => c.joined).map(challenge => (
              <li key={challenge.id}>{challenge.name} - {challenge.progress.toFixed(1)}% complete</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

export default Challenges
