
import React, { useEffect } from 'react';
import { AppInfo } from '../types.ts';

interface AppDetailsModalProps {
  app: AppInfo | null;
  onClose: () => void;
}

const AppDetailsModal: React.FC<AppDetailsModalProps> = ({ app, onClose }) => {
  useEffect(() => {
    if (!app) return;

    const idMatch = app.appStoreUrl.match(/id(\d+)/);
    const appId = idMatch ? idMatch[1] : '';

    if (appId) {
      let meta = document.querySelector('meta[name="apple-itunes-app"]') as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'apple-itunes-app';
        document.head.appendChild(meta);
      }
      meta.content = `app-id=${appId}`;
    }

    document.body.style.overflow = 'hidden';

    return () => {
      const meta = document.querySelector('meta[name="apple-itunes-app"]');
      if (meta) meta.remove();
      document.body.style.overflow = '';
    };
  }, [app]);

  if (!app) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center text-center animate-fade-in px-6"
      style={{ 
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        background: 'rgba(10, 10, 10, 0.85)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)'
      }}
    >
      <button 
        onClick={onClose}
        className="absolute top-10 left-8 text-white/30 hover:text-white transition-colors flex items-center space-x-2 active:scale-90 group"
        aria-label="Back"
      >
        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
          <i className="fa-solid fa-chevron-left text-sm"></i>
        </div>
        <span className="text-sm font-bold">Back</span>
      </button>

      <div className="animate-float">
        <div className="relative inline-block mb-10">
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
          <img 
            src={app.icon} 
            className="relative w-32 h-32 rounded-[32px] shadow-2xl mx-auto border border-white/10" 
            alt="icon"
          />
        </div>
        <h1 className="text-4xl font-black text-white m-0 tracking-tighter">
          {app.name}
        </h1>
        <p className="text-xl text-white/40 mt-4 font-medium">
          Download and update
        </p>
      </div>

      <div className="absolute bottom-16 w-full px-10 max-w-xs">
        <div className="h-[1px] bg-white/5 w-full mb-6"></div>
        <p className="text-[12px] leading-relaxed font-bold text-white/30 uppercase tracking-widest">
          ใช้ Safari เท่านั้น<br/>แบนเนอร์จะปรากฏด้านบน
        </p>
      </div>
    </div>
  );
};

export default AppDetailsModal;
