import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Solutions } from './components/Solutions';
import { Services } from './components/Services';
import { AppShowcase } from './components/AppShowcase';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 selection:bg-pulse-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Services />
        <AppShowcase />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;