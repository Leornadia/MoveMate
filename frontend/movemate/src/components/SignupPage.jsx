import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      console.log('Attempting to register with:', formData); // Debug log
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
      });

      const data = await response.json();
      console.log('Registration response:', data); // Debug log

      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } else {
        setError(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex-1 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat brightness-50" 
          style={{ 
            backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photorealistic_3d_image_of_an_athletic_african_american_woman_in_sporty_attire_holding_a_smartphone_displaying_the_habitflow_logo_the_woman_is_smiling_confidently_facing_the_camera_in_a_dynamic_pose_that_suggests_-EmAQH5rpfFQxYxuZCVpFy3m4c169tb.jpeg')",
          }}
        />

        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          {/* Hero Text */}
          <div className="text-center text-white mb-8">
            <h2 className="text-6xl font-bold mb-4">MoveMate</h2>
            <p className="text-2xl">Join us on your fitness journey</p>
          </div>

          {/* Signup Card */}
          <Card className="w-full max-w-md bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Create an Account</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <Button 
                  type="submit" 
                  className="w-full bg-[#F15A29] hover:bg-[#d14923] text-white"
                >
                  Sign Up
                </Button>
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <a href="/login" className="text-[#F15A29] hover:underline">
                      Log in
                    </a>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
