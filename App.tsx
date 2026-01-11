
import React, { useState, useMemo } from 'react';
import AppCard from './components/AppCard.tsx';
import AppDetailsModal from './components/AppDetailsModal.tsx';
import AIAdvisor from './components/AIAdvisor.tsx';
import { AppInfo, AppCategory } from './types.ts';
import { MOCK_APPS } from './constants.ts';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<AppCategory>(AppCategory.ALL);
  const [selectedApp, setSelectedApp] = useState<AppInfo | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const displayApps = useMemo(() => {
    let apps = MOCK_APPS || [];
    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      apps = apps.filter(app => 
        app.name.toLowerCase().includes(lowerQuery) || 
        app.developer.toLowerCase().includes(lowerQuery)
      );
    }
    if (activeCategory !== AppCategory.ALL) {
      apps = apps.filter(app => app.category === activeCategory);
    }
    return apps;
  }, [searchQuery, activeCategory]);

  const categories = Object.values(AppCategory);
  const featuredApp = MOCK_APPS[0];

  return (
    <div className="min-h-screen">
      {!selectedApp ? (
        <div className="animate-fade-in pb-20">
          {/* Header & Category Tabs */}
          <header className="sticky top-0 z-40 glass pt-8 pb-4">
            <div className="max-w-5xl mx-auto px-6">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-black text-white tracking-tighter">PKC Store</h1>
                <div className="relative w-48 group hidden sm:block">
                  <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-white/30 text-xs"></i>
                  <input 
                    type="text" 
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-1.5 pl-9 pr-4 text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all"
                  />
                </div>
              </div>

              {/* Enhanced Category Bar */}
              <nav className="flex items-center space-x-2 overflow-x-auto scrollbar-hide -mx-6 px-6">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`whitespace-nowrap px-6 py-2 rounded-full text-xs font-black transition-all ${
                      activeCategory === cat 
                        ? 'bg-white text-black shadow-lg shadow-white/10 scale-105' 
                        : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {cat.toUpperCase()}
                  </button>
                ))}
              </nav>
            </div>
          </header>

          <main className="max-w-5xl mx-auto px-6 mt-8">
            {/* Download Banner Section (Only on "All") */}
            {activeCategory === AppCategory.ALL && !searchQuery && featuredApp && (
              <section className="mb-12">
                <div 
                  onClick={() => setSelectedApp(featuredApp)}
                  className="relative group cursor-pointer overflow-hidden rounded-[40px] shadow-2xl h-[450px]"
                >
                  <img src={featuredApp.banner} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="banner" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-10 flex flex-col justify-end">
                    <span className="text-blue-400 font-black text-[10px] tracking-[0.3em] uppercase mb-2">Editor's Choice</span>
                    <h2 className="text-4xl font-black text-white mb-3 tracking-tighter leading-tight max-w-lg">{featuredApp.name}</h2>
                    <p className="text-white/60 text-sm max-w-sm mb-6 line-clamp-2">{featuredApp.description}</p>
                    <div className="flex items-center gap-4">
                      <button className="bg-blue-500 text-white font-black py-3 px-10 rounded-full hover:bg-blue-400 transition-colors shadow-xl shadow-blue-500/20 active:scale-95">GET NOW</button>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Warning Message */}
            <div className="mb-10 bg-white/[0.02] border border-white/5 p-5 rounded-[28px] flex gap-4 items-center">
              <div className="w-10 h-10 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                <i className="fa-solid fa-circle-info"></i>
              </div>
              <div className="text-[13px] text-white/50 font-medium">
                <span className="text-yellow-500 font-bold block mb-0.5">โปรดทราบ</span>
                ล็อกอิน Apple ID ใน App Store ก่อนดาวน์โหลด และห้ามลบแอปที่ติดตั้งผ่านสโตร์นี้
              </div>
            </div>

            {/* Grid Header */}
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-black text-white tracking-tight">
                {searchQuery ? 'Search Results' : activeCategory}
              </h3>
              <span className="text-white/20 text-sm font-bold">{displayApps.length} Apps</span>
            </div>

            {/* Apps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayApps.map(app => (
                <AppCard key={app.id} app={app} onClick={setSelectedApp} />
              ))}
            </div>

            {displayApps.length === 0 && (
              <div className="text-center py-20 opacity-20">
                <i className="fa-solid fa-ghost text-5xl mb-4"></i>
                <p className="font-bold">No apps found</p>
              </div>
            )}
          </main>
          
          <AIAdvisor onSuggest={(apps) => {
            setActiveCategory(AppCategory.ALL);
            setSearchQuery('');
          }} />
        </div>
      ) : (
        <AppDetailsModal 
          app={selectedApp} 
          onClose={() => setSelectedApp(null)} 
        />
      )}
    </div>
  );
};

export default App;
