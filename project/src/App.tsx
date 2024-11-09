import React from 'react';
import { Brain, Bot, Sparkles, Globe2, Users, Lock } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;