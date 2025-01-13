import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { Home, Dumbbell, Target, Book, Trophy, HelpCircle, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function DashboardLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: Dumbbell, label: 'Exercises', path: '/exercises' },
    { icon: Target, label: 'Goals', path: '/goals' },
    { icon: Book, label: 'Journal', path: '/journal' },
    { icon: Trophy, label: 'Challenges', path: '/challenges' },
    { icon: HelpCircle, label: 'Help', path: '/help' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gradient-peach-pink p-6 space-y-8 bg-black fixed h-full">
        <div className="flex items-center gap-2 mb-8">
          <Home className="h-6 w-6 text-gradient-peach-pink" />
          <span className="text-xl font-semibold text-gradient-peach-pink">MoveMate</span>
        </div>

        <nav className="space-y-6">
          {menuItems.map((item) => (
            <Link key={item.label} to={item.path}>
              <Button
                variant="ghost"
                className="w-full justify-start gap-3 text-gray-300 hover:text-gradient-peach-pink hover:bg-black/50"
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Button>
            </Link>
          ))}

          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-gray-300 hover:text-gradient-peach-pink mt-8"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            Logout
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64">
        <Outlet />
      </main>
    </div>
  );
}


