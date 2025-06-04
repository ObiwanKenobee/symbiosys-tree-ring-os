
import React from 'react';
import { useSunCycle } from '@/hooks/useSunCycle';
import { Sun, Moon, Sunrise, Sunset } from 'lucide-react';

export const SeasonalHeader = () => {
  const { currentPhase, season, timeUntilNext } = useSunCycle();
  
  const getPhaseIcon = () => {
    switch (currentPhase) {
      case 'dawn': return <Sunrise className="w-8 h-8 text-orange-500" />;
      case 'day': return <Sun className="w-8 h-8 text-yellow-500" />;
      case 'dusk': return <Sunset className="w-8 h-8 text-purple-500" />;
      case 'night': return <Moon className="w-8 h-8 text-indigo-300" />;
      default: return <Sun className="w-8 h-8 text-yellow-500" />;
    }
  };

  return (
    <header className="bg-white/20 backdrop-blur-lg border-b border-white/30">
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              SymbiOSys
            </div>
            <div className="text-sm text-gray-600">
              Planetary Healing Operating System
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              {getPhaseIcon()}
              <div className="text-right">
                <div className="font-semibold capitalize text-gray-800">
                  {currentPhase} • {season}
                </div>
                <div className="text-sm text-gray-600">
                  {timeUntilNext} until next phase
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 bg-white/30 rounded-full px-4 py-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">
                Mesh Active: 342 nodes
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
