import React from 'react';
import Navbar from './shared/Navbar';
import HeroSection from './HeroSection';
import Footer from './shared/Footer';
import Carousel123 from './shared/Carousel';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 via-blue-100 to-blue-200">
      <Navbar />
      <main className="flex-grow animate-fade-in">
        <HeroSection />
      </main>
      {/* <Carousel123/> */}
      <Footer/>
    </div>
  );
};

export default Home;
