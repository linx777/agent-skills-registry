import React from 'react';
import { Role } from '../types';

interface SidebarProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeFilter, setActiveFilter }) => {
  const roles = Object.values(Role);

  return (
    <div className="hidden md:flex w-64 border-r border-black/10 flex-col h-full bg-white z-10 sticky top-0 overflow-y-auto">
      <div className="p-8 pb-4">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60 mb-8">
          Explore by Role
        </h2>
        <nav className="space-y-1">
          {roles.map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => setActiveFilter(role)}
              className={`w-full text-left px-0 py-2.5 text-sm transition-all duration-200 group flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-sm ${
                activeFilter === role 
                  ? 'text-black font-semibold translate-x-1' 
                : 'text-black/70 hover:text-black'
              }`}
            >
              <span>{role}</span>
              {activeFilter === role && (
                <div className="w-1 h-1 rounded-full bg-black ml-2" />
              )}
            </button>
          ))}
        </nav>

        {/* <div className="mt-12">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40 mb-6">
            Featured Skills
          </h2>
          <button
            onClick={() => setActiveFilter('Cowork')}
            className={`w-full text-left px-0 py-2.5 text-sm transition-all duration-200 group flex items-center justify-between ${
              activeFilter === 'Cowork' 
              ? 'text-black font-semibold translate-x-1' 
              : 'text-black/50 hover:text-black'
            }`}
          >
            <span>Cowork</span>
            {activeFilter === 'Cowork' && (
              <div className="w-1 h-1 rounded-full bg-black ml-2" />
            )}
          </button>
        </div> */}
      </div>
      
      <div className="mt-auto p-8 border-t border-black/5">
        <div className="text-[10px] text-black/50 leading-relaxed font-medium">
          REGISTRY V1.0<br />
          {/* NODE CLUSTER: PROD-US */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
