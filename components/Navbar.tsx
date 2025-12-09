import React from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Our Services' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center cursor-pointer" onClick={() => setActiveTab('home')}>
            <BrandLogo className="h-16 w-auto mr-3 filter drop-shadow-lg" />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-display font-bold tracking-wider text-white uppercase">
                MUTHA LAKSHMI
              </span>
              <span className="text-xs text-brand-yellow tracking-[0.2em] font-semibold">
                INDUSTRIES
              </span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3 py-2 text-sm font-bold uppercase tracking-wide transition-all duration-300 ${
                    activeTab === item.id
                      ? 'text-brand-yellow border-b-2 border-brand-yellow'
                      : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-brand-yellow/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => setActiveTab('contact')}
                className="bg-brand-yellow hover:bg-brand-yellowHover text-brand-blue font-bold py-2 px-6 rounded-sm font-display transition-colors flex items-center shadow-lg"
              >
                <Phone className="w-4 h-4 mr-2" />
                GET QUOTE
              </button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-yellow hover:text-white hover:bg-brand-blueLight focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-brand-blue border-b border-brand-yellow">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-4 rounded-md text-base font-bold uppercase ${
                  activeTab === item.id
                    ? 'text-brand-blue bg-brand-yellow'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};