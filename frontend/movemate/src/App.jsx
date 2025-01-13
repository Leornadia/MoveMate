import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignupPage from './components/SignupPage';
import DashboardLayout from './components/DashboardLayout';
import Dashboard from './components/Dashboard';
import Exercises from './components/Exercises';
import Goals from './components/Goals';
import Journal from './components/Journal';
import Challenges from './components/Challenges';
import Help from './components/Help';
import GettingStarted from './components/GettingStarted';
import FAQ from './components/FAQ';

// Protected Route wrapper component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="exercises" element={<Exercises />} />
          <Route path="goals" element={<Goals />} />
          <Route path="journal" element={<Journal />} />
          <Route path="challenges" element={<Challenges />} />
          <Route path="help" element={<Help />}>
            <Route index element={<Navigate to="getting-started" replace />} />
            <Route path="getting-started" element={<GettingStarted />} />
            <Route path="faq" element={<FAQ />} />
          </Route>
        </Route>

        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}


