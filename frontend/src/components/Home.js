import React from 'react';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-4 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Welcome to MoveMate</h1>
      <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
        Your personal fitness habit tracker. Start your journey to a healthier lifestyle today.
      </p>
    </div>
  );
}

export default Home;
