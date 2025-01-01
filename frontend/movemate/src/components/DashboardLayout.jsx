import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Home, Dumbbell, Target, BookText, Trophy, HelpCircle, LogOut } from 'lucide-react';

export default function DashboardLayout({ children, onLogout }) {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: Dumbbell, label: 'Exercises', path: '/dashboard/exercises' },
    { icon: Target, label: 'Goals', path: '/dashboard/goals' },
    { icon: BookText, label: 'Journal', path: '/dashboard/journal' },
    { icon: Trophy, label: 'Challenges', path: '/dashboard/challenges' },
    { icon: HelpCircle, label: 'Help', path: '/dashboard/help' },
  ];

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-pink-300/20 p-6">
        <div className="flex items-center gap-2 mb-8">
          <Home className="h-6 w-6 text-pink-300" />
          <span className="text-xl font-semibold text-pink-300">MoveMate</span>
        </div>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
            >
              <Button
                variant="ghost"
                className={`w-full justify-start gap-3 ${
                  location.pathname === item.path 
                    ? 'text-pink-300 bg-pink-300/10' 
                    : 'text-gray-300 hover:text-pink-300 hover:bg-pink-300/10'
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Button>
            </Link>
          ))}
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-gray-300 hover:text-pink-300 hover:bg-pink-300/10 mt-6"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            Logout
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8">
        {children}
      </main>
    </div>
  );
}
