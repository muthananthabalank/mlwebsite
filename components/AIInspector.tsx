import React, { useState, useRef } from 'react';
import { Camera, Upload, AlertCircle, CheckCircle, Loader2, RefreshCw } from 'lucide-react';
import { analyzeIndustrialImage } from '../services/geminiService';
import { AIAnalysisResult } from '../types';

export const AIInspector: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIAnalysisResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImage(base64String);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerAnalysis = async () => {
    if (!image) return;

    setLoading(true);
    try {
      // Extract base64 data strictly
      const base64Data = image.split(',')[1];
      const mimeType = image.split(';')[0].split(':')[1];
      
      const analysis = await analyzeIndustrialImage(base64Data, mimeType);
      setResult(analysis);
    } catch (error) {
      console.error(error);
      alert("Analysis failed. Please try a different image.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setImage(null);
    setResult(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="bg-slate-900 min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-display font-bold text-white">Visual Defect Inspector</h2>
          <p className="mt-2 text-gray-400">
            Upload an image of machinery, pipes, or components. 
            Gemini AI will analyze it for defects, rust, or safety hazards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-slate-800/50 rounded-xl border border-white/10 p-6 flex flex-col items-center justify-center min-h-[400px]">
            {!image ? (
              <div className="w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-gray-600 rounded-lg p-12 hover:border-neon-cyan transition-colors">
                <div className="bg-slate-700/50 p-4 rounded-full mb-4">
                  <Camera className="h-10 w-10 text-neon-cyan" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Upload Inspection Image</h3>
                <p className="text-gray-400 text-sm mb-6 text-center">
                  Drag and drop or select a file
                  <br />
                  (JPG, PNG supported)
                </p>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="image/*"
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-6 py-2 bg-neon-cyan text-black font-semibold rounded hover:bg-cyan-300 transition-colors"
                >
                  Select File
                </button>
              </div>
            ) : (
              <div className="w-full flex flex-col items-center">
                <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden border border-white/20">
                  <img src={image} alt="Inspection Target" className="w-full h-full object-contain bg-black/40" />
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={handleReset}
                    className="flex items-center px-4 py-2 border border-gray-500 text-gray-300 rounded hover:bg-white/5"
                  >
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Reset
                  </button>
                  <button
                    onClick={triggerAnalysis}
                    disabled={loading}
                    className={`flex items-center px-6 py-2 rounded font-semibold text-black transition-all ${
                      loading 
                        ? 'bg-gray-500 cursor-not-allowed' 
                        : 'bg-neon-cyan hover:bg-cyan-300 shadow-[0_0_15px_rgba(0,243,255,0.3)]'
                    }`}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Upload className="h-4 w-4 mr-2" />
                        Run Analysis
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Results Section */}
          <div className="bg-slate-800/50 rounded-xl border border-white/10 p-6 flex flex-col relative overflow-hidden">
            <h3 className="text-xl font-display font-semibold text-white mb-4 flex items-center">
              <span className="w-2 h-6 bg-neon-orange mr-3 rounded-sm"></span>
              Analysis Report
            </h3>
            
            <div className="flex-grow bg-black/30 rounded-lg p-6 overflow-y-auto font-mono text-sm border border-white/5">
              {!result && !loading && (
                <div className="h-full flex flex-col items-center justify-center text-gray-500">
                  <AlertCircle className="h-12 w-12 mb-4 opacity-50" />
                  <p>Awaiting image input...</p>
                </div>
              )}
              
              {loading && (
                <div className="space-y-4">
                  <div className="h-4 bg-gray-700/50 rounded w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-gray-700/50 rounded w-1/2 animate-pulse"></div>
                  <div className="h-4 bg-gray-700/50 rounded w-5/6 animate-pulse"></div>
                  <div className="space-y-2 mt-8">
                    <div className="h-2 bg-gray-700/50 rounded animate-pulse"></div>
                    <div className="h-2 bg-gray-700/50 rounded animate-pulse"></div>
                    <div className="h-2 bg-gray-700/50 rounded animate-pulse"></div>
                  </div>
                </div>
              )}

              {result && (
                <div className="space-y-4 animate-in fade-in duration-500">
                   <div className="flex items-center text-neon-cyan mb-4 pb-4 border-b border-white/10">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span>Analysis Complete • {new Date(result.timestamp).toLocaleTimeString()}</span>
                   </div>
                   <div className="prose prose-invert prose-sm max-w-none">
                     <div className="whitespace-pre-line leading-relaxed text-gray-300">
                        {result.text}
                     </div>
                   </div>
                </div>
              )}
            </div>
            
            {/* Decoration */}
            <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
                <div className="text-[10px] text-neon-cyan font-mono">
                    ID: 8X-293<br/>
                    LOC: SECTOR-7<br/>
                    AI: GEMINI-2.5
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};