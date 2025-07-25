import React, { useState, useEffect } from 'react';
import './App.css';

// Import components (we'll create these)
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import PortfolioSection from './components/PortfolioSection';
import ProcessTimelineSection from './components/ProcessTimelineSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-dark-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin-slow w-16 h-16 border-4 border-electric-purple border-t-transparent rounded-full mb-4 mx-auto"></div>
          <h2 className="text-2xl font-display font-bold gradient-text">
            BlueSky Agency<span className="loading-dots"></span>
          </h2>
          <p className="text-gray-400 mt-2">Crafting Excellence</p>
        </div>
      </div>
    );
  }

  return (
    <div className="App bg-dark-bg text-white overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <PortfolioSection />
        <ProcessTimelineSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;