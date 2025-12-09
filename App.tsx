import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Features';
import { About } from './components/About';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <Hero onGetStarted={() => setActiveTab('services')} onContact={() => setActiveTab('contact')} />
            <About />
            <Services />
            <Contact />
          </>
        );
      case 'services':
        return <Services />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onGetStarted={() => setActiveTab('services')} onContact={() => setActiveTab('contact')} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-blue text-white font-sans selection:bg-brand-yellow selection:text-brand-blue">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="fade-in pt-0">
        {renderContent()}
      </main>

      <footer className="bg-brand-blueLight border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-display font-bold text-white uppercase">
              MUTHA LAKSHMI <span className="text-brand-yellow">INDUSTRIES</span>
            </span>
            <p className="text-sm text-gray-500 mt-2">Precision Engineering Solutions in Coimbatore.</p>
          </div>
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Mutha Lakshmi Industries. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;