import React from 'react';
import DashboardLayout from './DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GettingStarted() {
  return (
    <DashboardLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Getting Started with MoveMate</h1>
        <Card>
          <CardHeader>
            <CardTitle>Welcome to MoveMate!</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-4">
              <li>Set up your profile: Add your personal information and fitness goals.</li>
              <li>Connect devices: Sync your fitness trackers or smartwatches for accurate data.</li>
              <li>Log your first workout: Use the 'Exercises' section to record your activities.</li>
              <li>Set goals: Visit the 'Goals' section to establish your fitness objectives.</li>
              <li>Join a challenge: Check out the 'Challenges' section to participate in community events.</li>
              <li>Track your progress: Regularly update your journal and monitor your improvements.</li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
