import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    "Quality Craftsmanship",
    "On-Time Delivery",
    "Customer Satisfaction",
    "Advanced Technology & Tools"
  ];

  return (
    <div className="py-20 bg-brand-blueLight border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-brand-yellow font-bold tracking-widest uppercase mb-2">Who We Are</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Trusted Excellence in <br/> Manufacturing
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              <strong className="text-white">Mutha Lakshmi Industries</strong> is a trusted name in precision job work located in <span className="text-brand-yellow">Ganapathy, Coimbatore</span>. With a strong commitment to quality, we deliver machining services that meet the highest engineering standards.
            </p>
            <p className="text-gray-400 mb-8">
              Our team is skilled, experienced, and focused on providing cost-effective industrial solutions with timely delivery. Under the leadership of <strong className="text-white">K. Manikandan</strong>, we continue to serve various engineering applications with dependability.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((val, idx) => (
                <div key={idx} className="flex items-center text-white font-medium">
                  <CheckCircle2 className="text-brand-yellow w-5 h-5 mr-3" />
                  {val}
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-brand-yellow"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-brand-yellow"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop" 
              alt="Industrial Workshop" 
              className="w-full h-auto shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};