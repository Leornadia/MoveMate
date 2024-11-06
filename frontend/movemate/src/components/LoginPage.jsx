import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login attempt', { email, password });
  };

  return (
    <div className="min-h-screen bg-[#FFDAB9] flex justify-center items-center p-4">
      <Card className="w-full max-w-md bg-[#FFF5EE]">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-[#36454F] text-center">Login to MoveMate</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-[#36454F]">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full mt-1"
                />
              </div>
              <div>
                <Label htmlFor="password" className="text-[#36454F]">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full mt-1"
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button type="submit" className="w-full bg-[#800000] hover:bg-[#A52A2A] text-white">
                Login
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link to="/forgot-password" className="text-sm text-[#36454F] hover:underline">
            Forgot Password?
          </Link>
          <Link to="/signup" className="text-sm text-[#800000] hover:underline">
            Need an account? Sign up
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
