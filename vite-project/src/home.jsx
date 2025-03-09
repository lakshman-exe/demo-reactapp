import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-6">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">
        Welcome to StudySmart
      </h1>
      <p className="text-gray-600 text-lg mb-4 text-center">
        Empowering students to learn efficiently with personalized study plans
        and AI evaluation.
      </p>
      <div className="flex justify-center gap-4">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-xl shadow-md">
          Get Started
        </button>
        <button className="bg-white border-2 border-blue-500 text-blue-500 px-6 py-2 rounded-xl shadow-md">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HomePage;
