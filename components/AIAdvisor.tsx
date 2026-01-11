
import React, { useState } from 'react';
import { getAppRecommendations } from '../services/geminiService.ts';
import { RecommendationResponse, AppInfo } from '../types.ts';
import { MOCK_APPS } from '../constants.ts';

interface AIAdvisorProps {
  onSuggest: (apps: AppInfo[]) => void;
}

const AIAdvisor: React.FC<AIAdvisorProps> = ({ onSuggest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<RecommendationResponse | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    setLoading(true);
    setResponse(null);
    try {
      const res = await getAppRecommendations(query);
      setResponse(res);
      const suggestedApps = MOCK_APPS.filter(app => res.suggestedAppIds.includes(app.id));
      if (suggestedApps.length > 0) {
        onSuggest(suggestedApps);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="glass w-80 sm:w-96 rounded-[32px] overflow-hidden animate-scale-up origin-bottom-right shadow-2xl border border-white/10">
          <div className="bg-white/5 p-5 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center space-x-2 text-white">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                <i className="fa-solid fa-sparkles"></i>
              </div>
              <span className="font-bold tracking-tight">App Advisor AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full hover:bg-white/5 flex items-center justify-center text-white/50 hover:text-white transition-all">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="p-6">
            {response ? (
              <div className="mb-6">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5 mb-3">
                  <p className="text-sm text-white/80 leading-relaxed italic">
                    "{response.reasoning}"
                  </p>
                </div>
                <button 
                  onClick={() => {
                    setResponse(null);
                    setQuery('');
                  }} 
                  className="text-xs text-blue-400 font-bold hover:text-blue-300 transition-colors flex items-center gap-1"
                >
                  <i className="fa-solid fa-rotate-left"></i> Ask something else
                </button>
              </div>
            ) : (
              <p className="text-sm text-white/40 mb-6 leading-relaxed">
                Looking for something specific? Ask me like: "I want an app for productivity" or "Recommend a creative tool."
              </p>
            )}

            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="How can I help you?"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all pr-12 placeholder:text-white/20"
                disabled={loading}
              />
              <button 
                type="submit"
                disabled={loading}
                className="absolute right-2 top-2 w-10 h-10 rounded-xl bg-blue-500 text-white flex items-center justify-center disabled:opacity-50 hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/20"
              >
                {loading ? <i className="fa-solid fa-spinner animate-spin"></i> : <i className="fa-solid fa-paper-plane text-sm"></i>}
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-blue-500 text-white shadow-xl shadow-blue-500/30 flex items-center justify-center text-xl hover:scale-110 hover:bg-blue-600 active:scale-95 transition-all"
        >
          <i className="fa-solid fa-wand-magic-sparkles"></i>
        </button>
      )}
    </div>
  );
};

export default AIAdvisor;
