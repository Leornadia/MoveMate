import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell, ArrowLeft } from 'lucide-react';

const exerciseData = {
  Cardio: ['Running', 'Cycling', 'Swimming', 'Jump Rope'],
  Strength: ['Squats', 'Deadlifts', 'Bench Press', 'Pull-ups'],
  Flexibility: ['Yoga', 'Stretching', 'Pilates', 'Foam Rolling'],
  HIIT: ['Burpees', 'Mountain Climbers', 'High Knees', 'Jumping Jacks'],
  Yoga: ['Sun Salutation', 'Warrior Pose', 'Downward Dog', 'Tree Pose'],
  Sports: ['Basketball', 'Tennis', 'Soccer', 'Volleyball']
};

export default function Exercises() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedExercise, setSelectedExercise] = useState(null);

  const renderCategoryList = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.keys(exerciseData).map((category) => (
        <Card key={category}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Dumbbell className="h-5 w-5 text-[#800000]" />
              {category}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Browse and track your {category.toLowerCase()} exercises</p>
            <div className="flex justify-center">
              <Button
                className="bg-[#800000] hover:bg-[#600000] text-white px-6"
                onClick={() => setSelectedCategory(category)}
              >
                View Exercises
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderExerciseList = () => (
    <div>
      <Button
        variant="ghost"
        className="mb-4"
        onClick={() => setSelectedCategory(null)}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Categories
      </Button>
      <h2 className="text-xl font-bold mb-4">{selectedCategory} Exercises</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {exerciseData[selectedCategory].map((exercise) => (
          <Card key={exercise}>
            <CardHeader>
              <CardTitle>{exercise}</CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                className="w-full bg-[#800000] hover:bg-[#600000] text-white"
                onClick={() => setSelectedExercise(exercise)}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderExerciseDetails = () => (
    <div>
      <Button
        variant="ghost"
        className="mb-4"
        onClick={() => setSelectedExercise(null)}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Exercises
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>{selectedExercise}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Detailed information about {selectedExercise} would go here.</p>
          <p>This could include instructions, benefits, and recommended sets/reps.</p>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Exercise Library</h1>
      {!selectedCategory && renderCategoryList()}
      {selectedCategory && !selectedExercise && renderExerciseList()}
      {selectedExercise && renderExerciseDetails()}
    </div>
  );
}
