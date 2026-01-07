import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsBanner from './components/StatsBanner';
import FeaturesGrid from './components/FeaturesGrid';
import NewsAndTraining from './components/NewsAndTraining';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <StatsBanner />
        <FeaturesGrid />
        <NewsAndTraining />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;