
import React from 'react';

export const LedgerTotem = () => {
  const regenActions = [
    { type: 'tree_planted', count: 23, energy: 'high', glyph: '🌳', ritual: 'Forest Blessing' },
    { type: 'water_cleaned', count: 8, energy: 'medium', glyph: '💧', ritual: 'River Ceremony' },
    { type: 'soil_healed', count: 15, energy: 'high', glyph: '🌱', ritual: 'Earth Communion' },
    { type: 'carbon_sequestered', count: 156, energy: 'low', glyph: '🌪️', ritual: 'Air Offering' },
    { type: 'biodiversity_restored', count: 7, energy: 'high', glyph: '🦋', ritual: 'Life Weaving' }
  ];

  const getTotemHeight = (energy: string) => {
    switch (energy) {
      case 'high': return 'h-16';
      case 'medium': return 'h-12';
      case 'low': return 'h-8';
      default: return 'h-10';
    }
  };

  const getGlowColor = (energy: string) => {
    switch (energy) {
      case 'high': return 'shadow-green-400/50';
      case 'medium': return 'shadow-yellow-400/50';
      case 'low': return 'shadow-blue-400/50';
      default: return 'shadow-gray-400/50';
    }
  };

  return (
    <div className="space-y-6">
      {/* Totem Visualization */}
      <div className="flex justify-center items-end space-x-3 h-24">
        {regenActions.map((action, index) => (
          <div
            key={action.type}
            className="flex flex-col items-center group cursor-pointer"
          >
            {/* Totem pillar */}
            <div
              className={`w-8 ${getTotemHeight(action.energy)} bg-gradient-to-t from-amber-800 to-amber-600 rounded-t-lg shadow-lg ${getGlowColor(action.energy)} transition-all duration-300 hover:scale-110 relative overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Energy particles */}
              {action.energy === 'high' && (
                <div className="absolute inset-0">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-bounce"
                      style={{
                        left: `${20 + i * 20}%`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: '1.5s'
                      }}
                    />
                  ))}
                </div>
              )}
              
              {/* Glyph */}
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 text-lg">
                {action.glyph}
              </div>
            </div>
            
            {/* Base */}
            <div className="w-10 h-2 bg-stone-700 rounded-b-lg" />
            
            {/* Tooltip */}
            <div className="absolute top-full mt-2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              <div className="font-semibold">{action.ritual}</div>
              <div>{action.count} actions</div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Recent Transactions */}
      <div className="space-y-3">
        <h4 className="font-semibold text-amber-800 mb-3">Recent Regenerative Transactions</h4>
        {regenActions.slice(0, 3).map((action, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-200/50">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{action.glyph}</span>
              <div>
                <div className="font-medium text-amber-900">{action.ritual}</div>
                <div className="text-sm text-amber-700">{action.count} actions completed</div>
              </div>
            </div>
            <div className={`w-3 h-3 rounded-full ${
              action.energy === 'high' ? 'bg-green-400' :
              action.energy === 'medium' ? 'bg-yellow-400' : 'bg-blue-400'
            } animate-pulse`} />
          </div>
        ))}
      </div>
      
      {/* Regeneration Credits Summary */}
      <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg border border-green-200">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-800 mb-1">1,247</div>
          <div className="text-sm text-green-700">Total Regeneration Credits</div>
          <div className="text-xs text-green-600 mt-1">Planetary Healing Index: +23.4%</div>
        </div>
      </div>
    </div>
  );
};
