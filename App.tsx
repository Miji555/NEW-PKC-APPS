
import React, { useState, useMemo } from 'react';
import AppCard from './components/AppCard';
import AppDetailsModal from './components/AppDetailsModal';
import AIAdvisor from './components/AIAdvisor';
import { AppInfo, AppCategory } from './types';
import { MOCK_APPS } from './constants';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<AppCategory>(AppCategory.ALL);
  const [selectedApp, setSelectedApp] = useState<AppInfo | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const displayApps = useMemo(() => {
    let apps = MOCK_APPS;
    if (activeCategory !== AppCategory.ALL) {
      apps = apps.filter(app => app.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      apps = apps.filter(app => 
        app.name.toLowerCase().includes(lowerQuery) || 
        app.developer.toLowerCase().includes(lowerQuery)
      );
    }
    return apps;
  }, [activeCategory, searchQuery]);

  const categories = Object.values(AppCategory);

  const handleAISuggestions = (apps: AppInfo[]) => {
    window.scrollTo({ top: 400, behavior: 'smooth' });
    setActiveCategory(AppCategory.ALL);
    setSearchQuery('');
  };

  return (
    <div className={`min-h-screen pb-24 ${selectedApp ? 'overflow-hidden' : ''}`}>
      {!selectedApp ? (
        <>
          {/* Main App Store Discovery View */}
          <header className="px-6 pt-12 pb-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">Apps</h1>
                <p className="text-xl text-gray-500 mt-2 font-medium">Discover high-quality applications.</p>
              </div>
              <div className="relative w-full md:w-80 group">
                <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#0071e3] transition-colors"></i>
                <input 
                  type="text" 
                  placeholder="Search apps..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#0071e3]/20 focus:bg-white transition-all shadow-sm"
                />
              </div>
            </div>

            <div className="mt-10 overflow-x-auto scrollbar-hide flex items-center space-x-3 pb-2 -mx-6 px-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === category 
                      ? 'bg-[#0071e3] text-white shadow-md shadow-blue-200' 
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </header>

          <main className="px-6 max-w-7xl mx-auto">
            {displayApps.length > 0 ? (
              <section className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Recommended</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayApps.map(app => (
                    <AppCard 
                      key={app.id} 
                      app={app} 
                      onClick={setSelectedApp} 
                    />
                  ))}
                </div>
              </section>
            ) : (
              <div className="text-center py-20 bg-white rounded-[40px] shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">No apps found</h3>
                <button 
                  onClick={() => { setActiveCategory(AppCategory.ALL); setSearchQuery(''); }}
                  className="mt-6 text-[#0071e3] font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
          
          <footer className="mt-24 py-12 px-6 border-t border-gray-200 text-center">
            <div className="flex items-center justify-center space-x-2 text-gray-400 mb-4">
              <i className="fa-brands fa-apple text-xl"></i>
              <span className="font-semibold text-lg">PKC Store</span>
            </div>
            <p className="text-sm text-gray-400">© 2026 PKC APPS. All rights reserved.</p>
          </footer>
          <AIAdvisor onSuggest={handleAISuggestions} />
        </>
      ) : (
        /* Minimalist Download Page - Triggers native Safari banner via Meta tag */
        <AppDetailsModal 
          app={selectedApp} 
          onClose={() => setSelectedApp(null)} 
        />
      )}
    </div>
  );
};

export default App;
