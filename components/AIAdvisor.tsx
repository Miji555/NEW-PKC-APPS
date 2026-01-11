
import React, { useState } from 'react';
import { getAppRecommendations } from '../services/geminiService';
import { RecommendationResponse, AppInfo } from '../types';
import { MOCK_APPS } from '../constants';

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
        <div className="bg-white w-80 sm:w-96 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden animate-scale-up origin-bottom-right">
          <div className="bg-[#0071e3] p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2 text-white">
              <i className="fa-solid fa-sparkles"></i>
              <span className="font-bold">App Advisor AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="p-4 max-h-[400px] overflow-y-auto">
            {response ? (
              <div className="mb-4">
                <p className="text-sm text-gray-600 italic bg-blue-50 p-3 rounded-2xl">
                  "{response.reasoning}"
                </p>
                <button 
                  onClick={() => {
                    setResponse(null);
                    setQuery('');
                  }} 
                  className="mt-2 text-xs text-[#0071e3] font-bold"
                >
                  Ask something else
                </button>
              </div>
            ) : (
              <p className="text-sm text-gray-500 mb-4">
                Looking for something specific? Ask me like: "I want an app for productivity" or "Recommend a creative tool."
              </p>
            )}

            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="How can I help you discover apps?"
                className="w-full bg-gray-100 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0071e3]/50 transition-all pr-12"
                disabled={loading}
              />
              <button 
                type="submit"
                disabled={loading}
                className="absolute right-2 top-2 w-8 h-8 rounded-xl bg-[#0071e3] text-white flex items-center justify-center disabled:opacity-50"
              >
                {loading ? <i className="fa-solid fa-spinner animate-spin"></i> : <i className="fa-solid fa-arrow-up"></i>}
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-[#0071e3] text-white shadow-lg shadow-blue-300 flex items-center justify-center text-xl hover:scale-110 active:scale-95 transition-all animate-pulse"
        >
          <i className="fa-solid fa-wand-magic-sparkles"></i>
        </button>
      )}
    </div>
  );
};

export default AIAdvisor;
