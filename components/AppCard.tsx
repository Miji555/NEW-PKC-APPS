
import React from 'react';
import { AppInfo } from '../types.ts';

interface AppCardProps {
  app: AppInfo;
  onClick: (app: AppInfo) => void;
}

const AppCard: React.FC<AppCardProps> = ({ app, onClick }) => {
  return (
    <div 
      onClick={() => onClick(app)}
      className="group cursor-pointer glass-card p-4 rounded-[28px] flex items-center gap-4 active:scale-95 transition-all"
    >
      <img 
        src={app.icon} 
        alt={app.name} 
        className="w-[60px] h-[60px] rounded-[14px] object-cover shadow-lg group-hover:scale-105 transition-transform"
      />
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-white truncate text-base leading-tight">{app.name}</h3>
        <p className="text-[12px] text-gray-400 truncate mt-0.5">{app.developer}</p>
        <div className="flex items-center gap-2 mt-1.5">
          <div className="flex items-center text-[#ffcc00] text-[10px]">
            <i className="fa-solid fa-star"></i>
            <span className="ml-1 font-bold text-white">{app.rating}</span>
          </div>
          <span className="text-[10px] text-gray-500">• {app.category}</span>
        </div>
      </div>
      <button className="bg-white/10 group-hover:bg-white group-hover:text-black text-white text-[11px] font-extrabold px-4 py-1.5 rounded-full backdrop-blur-md transition-all uppercase tracking-wider">
        {app.price === 'Free' ? 'Get' : app.price}
      </button>
    </div>
  );
};

export default AppCard;
