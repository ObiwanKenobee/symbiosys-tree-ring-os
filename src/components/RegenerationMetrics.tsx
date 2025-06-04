
import React from 'react';

export const RegenerationMetrics = () => {
  const metrics = [
    { 
      label: 'Carbon Sequestered', 
      value: '2.3k', 
      unit: 'tons CO₂', 
      trend: '+12%',
      color: 'green'
    },
    { 
      label: 'Water Restored', 
      value: '847', 
      unit: 'gallons', 
      trend: '+8%',
      color: 'blue'
    },
    { 
      label: 'Biodiversity Index', 
      value: '94.2', 
      unit: 'species health', 
      trend: '+5%',
      color: 'purple'
    },
    { 
      label: 'Soil Vitality', 
      value: '78%', 
      unit: 'microbial activity', 
      trend: '+15%',
      color: 'amber'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green': return 'text-green-700 bg-green-100 border-green-200';
      case 'blue': return 'text-blue-700 bg-blue-100 border-blue-200';
      case 'purple': return 'text-purple-700 bg-purple-100 border-purple-200';
      case 'amber': return 'text-amber-700 bg-amber-100 border-amber-200';
      default: return 'text-gray-700 bg-gray-100 border-gray-200';
    }
  };

  return (
    <div className="space-y-4">
      {metrics.map((metric, index) => (
        <div 
          key={metric.label}
          className={`p-4 rounded-lg border ${getColorClasses(metric.color)} transition-all duration-300 hover:scale-105`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex justify-between items-start mb-2">
            <span className="text-sm font-medium opacity-80">{metric.label}</span>
            <span className="text-xs bg-white/50 px-2 py-1 rounded-full font-semibold">
              {metric.trend}
            </span>
          </div>
          <div className="text-2xl font-bold mb-1">{metric.value}</div>
          <div className="text-xs opacity-70">{metric.unit}</div>
          
          {/* Animated progress indicator */}
          <div className="mt-3 w-full bg-white/30 rounded-full h-1">
            <div 
              className="h-1 bg-white/60 rounded-full transition-all duration-1000"
              style={{ 
                width: `${Math.random() * 60 + 40}%`,
                animationDelay: `${index * 0.2}s`
              }}
            />
          </div>
        </div>
      ))}
      
      {/* Total Impact Visualization */}
      <div className="mt-6 p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg text-white">
        <div className="text-center">
          <div className="text-sm opacity-90 mb-1">Planetary Healing Coefficient</div>
          <div className="text-3xl font-bold mb-2">7.42</div>
          <div className="text-xs opacity-80">
            Your actions ripple across 347 connected ecosystems
          </div>
        </div>
      </div>
    </div>
  );
};
