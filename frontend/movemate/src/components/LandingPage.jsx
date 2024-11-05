import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

function LandingPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
      {/* Background Image */}
      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photorealistic_3d_image_of_an_athletic_african_american_woman_in_sporty_attire_holding_a_smartphone_displaying_the_habitflow_logo_the_woman_is_smiling_confidently_facing_the_camera_in_a_dynamic_pose_that_suggests_-hSqpua6cuiKseBzatSZc7omD5czHxV.jpeg')",
        }}
      />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/50 to-black/20"
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="w-full max-w-md text-center mb-8 ml-auto mr-8">
        <h1 className="text-5xl font-bold text-white mb-4">MoveMate</h1>
        <p className="text-2xl text-gray-200">Your fitness journey starts here.</p>
      </div>

      {/* Login Card */}
      <Card className="w-full max-w-sm bg-white/95 backdrop-blur ml-auto mr-8">
        <CardHeader>
          <CardTitle className="text-center">Welcome Back</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  placeholder="you@example.com" 
                  type="email" 
                  autoCapitalize="none" 
                  autoComplete="email" 
                  autoCorrect="off" 
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  autoCapitalize="none" 
                  autoComplete="current-password" 
                />
              </div>
              <Button className="w-full bg-orange-600 hover:bg-orange-700">
                Sign In
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-600">
            Need an account?{" "}
            <a href="#" className="text-orange-600 hover:text-orange-700 hover:underline">
              Sign up
            </a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default LandingPage;
