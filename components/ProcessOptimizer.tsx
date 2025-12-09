import React, { useState } from 'react';
import { MessageSquare, Send, Cpu, Terminal } from 'lucide-react';
import { consultOperations } from '../services/geminiService';

interface Message {
  role: 'user' | 'ai';
  content: string;
}

export const ProcessOptimizer: React.FC = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'ai',
      content: 'System Initialized. I am your Industrial Process Consultant. Describe your manufacturing bottleneck, efficiency target, or safety concern.'
    }
  ]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim() || loading) return;

    const userMessage = query;
    setQuery('');
    setLoading(true);

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);

    try {
      const response = await consultOperations(userMessage);
      setMessages(prev => [...prev, { role: 'ai', content: response.text }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', content: "Connection Error: Unable to reach Titan Core servers." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center">
          <Cpu className="h-8 w-8 text-neon-orange mr-4" />
          <div>
            <h2 className="text-3xl font-display font-bold text-white">Process Optimizer AI</h2>
            <p className="text-gray-400">Strategic consultation for lean manufacturing and operations.</p>
          </div>
        </div>

        <div className="bg-slate-900 rounded-lg border border-white/10 shadow-2xl overflow-hidden flex flex-col h-[600px]">
          {/* Header */}
          <div className="bg-slate-800 p-4 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs font-mono text-gray-500 flex items-center">
              <Terminal className="w-3 h-3 mr-1" />
              TITAN_OS_TERMINAL
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-grow p-6 overflow-y-auto space-y-6 bg-black/20">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] rounded-lg p-4 ${
                    msg.role === 'user' 
                      ? 'bg-neon-cyan/10 border border-neon-cyan/30 text-white rounded-br-none' 
                      : 'bg-slate-800 border border-white/10 text-gray-200 rounded-bl-none'
                  }`}
                >
                  <div className="flex items-center mb-2 opacity-50 text-xs font-mono uppercase">
                     {msg.role === 'user' ? 'Operator' : 'AI Core'}
                  </div>
                  <div className="whitespace-pre-line text-sm leading-relaxed">
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
            {loading && (
               <div className="flex justify-start">
                 <div className="bg-slate-800 border border-white/10 rounded-lg p-4 rounded-bl-none">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-neon-orange rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-neon-orange rounded-full animate-bounce delay-75"></div>
                      <div className="w-2 h-2 bg-neon-orange rounded-full animate-bounce delay-150"></div>
                    </div>
                 </div>
               </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-800 border-t border-white/10">
            <form onSubmit={handleSend} className="flex gap-4">
              <div className="flex-grow relative">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask about efficiency, Six Sigma, or material handling..."
                  className="w-full bg-slate-900 border border-white/10 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                />
                <MessageSquare className="absolute right-3 top-3.5 h-5 w-5 text-gray-500" />
              </div>
              <button
                type="submit"
                disabled={loading || !query.trim()}
                className="bg-neon-cyan hover:bg-cyan-300 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-2 px-6 rounded-md transition-colors flex items-center"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};