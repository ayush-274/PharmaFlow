import React from 'react';
import Navbar from './shared/Navbar';
import HeroSection from './HeroSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-100 to-blue-200">
      <Navbar />
      <div className="animate-fade-in">
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;
