import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart, Users, Calendar, Target, Dumbbell, Book, Trophy, Settings, LogOut } from 'lucide-react'
import Exercises from './Exercises';
// Import other components when they're ready
// import Goals from './Goals';
// import Journal from './Journal';
// import Challenges from './Challenges';

export default function DashboardLayout({ children }) {
  const [activeSection, setActiveSection] = useState('dashboard');

  const navItems = [
    { name: 'Dashboard', icon: BarChart, key: 'dashboard' },
    { name: 'Exercise', icon: Dumbbell, key: 'exercise' },
    { name: 'Goal', icon: Target, key: 'goal' },
    { name: 'Journal', icon: Book, key: 'journal' },
    { name: 'Challenges', icon: Trophy, key: 'challenges' },
    { name: 'Community', icon: Users, key: 'community' },
    { name: 'Calendar', icon: Calendar, key: 'calendar' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'exercise':
        return <Exercises />;
      case 'goal':
        // return <Goals />;
        return <div>Goals content (to be implemented)</div>;
      case 'journal':
        // return <Journal />;
        return <div>Journal content (to be implemented)</div>;
      case 'challenges':
        // return <Challenges />;
        return <div>Challenges content (to be implemented)</div>;
      case 'dashboard':
      default:
        return children;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-[#F15A29]">MoveMate</h1>
        </div>
        <nav className="mt-4">
          {navItems.map((item) => (
            <Button
              key={item.key}
              variant="ghost"
              className={`w-full justify-start ${activeSection === item.key ? 'bg-gray-200' : ''}`}
              onClick={() => setActiveSection(item.key)}
            >
              <item.icon className="mr-2 h-4 w-4" />
              {item.name}
            </Button>
          ))}
        </nav>
        <div className="absolute bottom-4 left-4 right-4">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button variant="ghost" className="w-full justify-start text-red-600">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
