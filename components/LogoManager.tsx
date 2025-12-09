import React, { useState, useRef } from 'react';
import { Upload, Download, RefreshCw, CheckCircle } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const LogoManager: React.FC = () => {
  const [previewLogo, setPreviewLogo] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setPreviewLogo(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="py-24 bg-brand-blueLight relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow opacity-5 blur-[100px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-yellow font-bold tracking-widest uppercase mb-2">Brand Identity</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white heading-underline pb-4">
            Logo Update
          </h3>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Manage and visualize the official Mutha Lakshmi Industries brand mark.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Display Section */}
          <div className="bg-brand-blue border border-gray-700 p-10 rounded-lg shadow-2xl flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="w-full aspect-square max-w-md flex items-center justify-center bg-brand-blueLight/50 rounded-lg border border-white/5 mb-8 p-8">
              {previewLogo ? (
                <img src={previewLogo} alt="Uploaded Logo Preview" className="w-full h-full object-contain filter drop-shadow-xl" />
              ) : (
                <BrandLogo className="w-full h-full filter drop-shadow-[0_0_25px_rgba(255,215,0,0.3)] transition-all duration-500 hover:scale-105" />
              )}
            </div>

            <div className="flex flex-col items-center">
               <span className="text-white font-display text-2xl font-bold tracking-widest uppercase mb-1">Official Logomark</span>
               <span className="text-brand-yellow text-sm tracking-widest uppercase font-semibold">Vector SVG Format</span>
            </div>
          </div>

          {/* Management Controls */}
          <div className="space-y-8">
            <div className="bg-white/5 border-l-4 border-brand-yellow p-6 backdrop-blur-sm">
              <h4 className="text-xl font-bold text-white mb-2">Current Version</h4>
              <p className="text-gray-400 text-sm mb-4">
                The current logo features the golden crown symbolizing excellence atop a diamond representing precision and durability. The "ML" monogram is integrated within the core.
              </p>
              <div className="flex items-center space-x-4 text-sm text-brand-yellow">
                <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2"/> Scalable SVG</span>
                <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2"/> Gold Gradient</span>
                <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2"/> Dark Mode Ready</span>
              </div>
            </div>

            <div className="bg-brand-blue p-8 border border-gray-700 rounded-lg">
              <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Actions</h4>
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 bg-brand-blueLight hover:bg-brand-blue border border-brand-yellow/30 text-white font-bold py-4 px-6 rounded transition-all flex items-center justify-center group"
                  >
                    <Upload className="w-5 h-5 mr-2 text-brand-yellow group-hover:scale-110 transition-transform" />
                    Upload New Version
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept="image/*"
                    className="hidden"
                  />

                  {previewLogo && (
                    <button 
                      onClick={handleReset}
                      className="bg-red-900/20 hover:bg-red-900/40 border border-red-500/30 text-red-400 font-bold py-4 px-4 rounded transition-all"
                    >
                      <RefreshCw className="w-5 h-5" />
                    </button>
                  )}
                </div>

                <button className="w-full bg-brand-yellow text-brand-blue font-bold py-4 px-6 rounded uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center shadow-lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download Assets Package
                </button>
                
                <p className="text-xs text-center text-gray-500 mt-4">
                  *Upload functionality is for preview purposes only in this demo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};