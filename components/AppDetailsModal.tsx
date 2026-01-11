
import React, { useEffect } from 'react';
import { AppInfo } from '../types';

interface AppDetailsModalProps {
  app: AppInfo | null;
  onClose: () => void;
}

const AppDetailsModal: React.FC<AppDetailsModalProps> = ({ app, onClose }) => {
  useEffect(() => {
    if (!app) return;

    // Extract App ID from the URL (e.g., id6448311069 -> 6448311069)
    const idMatch = app.appStoreUrl.match(/id(\d+)/);
    const appId = idMatch ? idMatch[1] : '';

    if (appId) {
      // Create or update the Apple Smart App Banner meta tag
      // This is what triggers the native "GET" banner at the top of Safari
      let meta = document.querySelector('meta[name="apple-itunes-app"]') as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'apple-itunes-app';
        document.head.appendChild(meta);
      }
      meta.content = `app-id=${appId}`;
    }

    // Cleanup: Remove the meta tag when the modal/view is closed
    return () => {
      const meta = document.querySelector('meta[name="apple-itunes-app"]');
      if (meta) {
        meta.remove();
      }
    };
  }, [app]);

  if (!app) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center animate-fade-in px-6">
      {/* Subtle Back button */}
      <button 
        onClick={onClose}
        className="absolute top-8 left-8 text-gray-300 hover:text-gray-900 transition-colors flex items-center space-x-2 font-medium"
      >
        <i className="fa-solid fa-chevron-left text-sm"></i>
        <span>Back to Store</span>
      </button>

      <div className="text-center">
        <h1 className="text-[2.5rem] font-bold text-black mb-2 leading-tight">
          {app.name}
        </h1>
        <p className="text-[1.2rem] text-[#666] font-normal">
          Download and update
        </p>
      </div>

      {/* Reassurance text for non-iOS users or users who don't see the banner immediately */}
      <div className="mt-20 opacity-20 text-[10px] text-center max-w-xs uppercase tracking-widest pointer-events-none">
        Native iOS Banner Triggered via App ID: {app.appStoreUrl.match(/id(\d+)/)?.[1]}
      </div>
    </div>
  );
};

export default AppDetailsModal;
