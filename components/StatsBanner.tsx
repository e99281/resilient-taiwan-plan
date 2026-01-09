import React from 'react';
import { Users, Building2, Store, Map } from 'lucide-react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { id: '1', value: '100,832', label: '防災士認證總人數', iconName: 'users' },
  { id: '2', value: '32', label: '進階防災士認證總人數', iconName: 'building' },
  { id: '3', value: '250', label: '韌性社區認證總數', iconName: 'store' }
];

const IconMap = {
  users: Users,
  building: Building2,
  store: Store
};

const StatsBanner: React.FC = () => {
  return (
    <section id="introduction" className="bg-slate-900 py-16 relative overflow-hidden">
      {/* Background pattern simulation */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-800/50">
          {stats.map((stat) => {
            const Icon = IconMap[stat.iconName];
            return (
              <div key={stat.id} className="pt-8 lg:pt-0 first:pt-0 flex flex-col items-center group cursor-default">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-teal-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight group-hover:text-teal-400 transition-colors">
                  {stat.value}
                </h3>
                <p className="text-slate-400 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;