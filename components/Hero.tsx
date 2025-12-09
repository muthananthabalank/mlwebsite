import React from 'react';
import { ChevronRight, Settings } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted, onContact }) => {
  return (
    <div className="relative bg-brand-blue overflow-hidden min-h-screen flex items-center">
      {/* Background Image with Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-40"
          src="https://images.unsplash.com/photo-1565043589221-1a6a33d266e6?q=80&w=3270&auto=format&fit=crop"
          alt="CNC Machine Industrial"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue/95 to-brand-blue/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="lg:w-3/4">
          <div className="inline-flex items-center px-4 py-2 rounded-sm border-l-4 border-brand-yellow bg-brand-blueLight/80 text-brand-yellow mb-8 backdrop-blur-sm">
            <span className="text-sm font-bold tracking-widest uppercase">Precision in Every Cut</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight font-display leading-tight mb-8">
            <span className="text-brand-yellow">MUTHA LAKSHMI</span> <br/>
            INDUSTRIES
          </h1>
          
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed font-light border-l border-brand-yellow/30 pl-6">
            We specialize in delivering high-precision machining solutions tailored to your industrial needs. 
            VMC, DRO Milling, and Custom Fabrication with unmatched accuracy and reliability in Coimbatore.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onGetStarted}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-yellow bg-brand-yellow text-brand-blue text-lg font-bold uppercase tracking-wide hover:bg-white hover:border-white transition-all duration-300"
            >
              Our Services
              <Settings className="ml-2 h-5 w-5 animate-spin-slow" />
            </button>
            <button 
              onClick={onContact}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white bg-transparent text-lg font-bold uppercase tracking-wide hover:bg-white hover:text-brand-blue transition-all duration-300"
            >
              Contact Us
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 border-t border-gray-700 pt-8">
            <div>
              <p className="text-3xl font-bold text-brand-yellow font-display">100%</p>
              <p className="text-sm text-gray-400 mt-1 uppercase tracking-wider">Quality Assurance</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-yellow font-display">On-Time</p>
              <p className="text-sm text-gray-400 mt-1 uppercase tracking-wider">Delivery</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-brand-yellow font-display">Precision</p>
              <p className="text-sm text-gray-400 mt-1 uppercase tracking-wider">Engineering</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};