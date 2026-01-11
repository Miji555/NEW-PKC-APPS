
import React from 'react';
import { AppInfo } from '../types';

interface AppCardProps {
  app: AppInfo;
  onClick: (app: AppInfo) => void;
}

const AppCard: React.FC<AppCardProps> = ({ app, onClick }) => {
  return (
    <div 
      onClick={() => onClick(app)}
      className="group cursor-pointer bg-white p-4 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-95 border border-transparent hover:border-gray-100"
    >
      <div className="flex gap-4">
        <img 
          src={app.icon} 
          alt={app.name} 
          className="w-16 h-16 rounded-2xl app-icon-shadow object-cover group-hover:scale-105 transition-transform"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-gray-900 truncate text-lg leading-tight">{app.name}</h3>
            {app.isEditorsChoice && (
              <span className="text-[10px] bg-blue-50 text-blue-600 font-bold px-1.5 py-0.5 rounded-sm uppercase">Editor's Choice</span>
            )}
          </div>
          <p className="text-sm text-gray-500 truncate">{app.developer}</p>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <span className="text-xs font-medium text-gray-700">{app.rating}</span>
              <i className="fa-solid fa-star text-[10px] text-gray-400"></i>
            </div>
            <button className="bg-gray-100 group-hover:bg-[#0071e3] group-hover:text-white text-[#0071e3] text-xs font-bold px-4 py-1.5 rounded-full transition-colors uppercase">
              {app.price === 'Free' ? 'Get' : app.price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
