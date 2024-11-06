import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#FFDAB9] flex flex-col justify-center items-center p-4">
      <h1 className="text-4xl md:text-6xl font-bold text-[#36454F] mb-6 text-center">
        Welcome to MoveMate
      </h1>
      <p className="text-xl md:text-2xl text-[#36454F] mb-8 text-center">
        Your Fitness Journey Starts Here!
      </p>
      <div className="space-x-4">
        <Button
          asChild
          className="bg-[#800000] hover:bg-[#A52A2A] text-white px-8 py-3 rounded-full text-lg"
        >
          <Link to="/login">Login</Link>
        </Button>
        <Button
          asChild
          className="bg-[#800000] hover:bg-[#A52A2A] text-white px-8 py-3 rounded-full text-lg"
        >
          <Link to="/signup">Sign Up</Link>
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
