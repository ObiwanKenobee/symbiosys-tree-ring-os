
import React from 'react';

interface BioDataPoint {
  name: string;
  value: number;
  trend: 'growing' | 'withering' | 'stable';
}

interface BioChartProps {
  data: BioDataPoint[];
  type: 'roots' | 'branches' | 'mycelium';
}

export const BioChart: React.FC<BioChartProps> = ({ data, type }) => {
  const getRootVisualization = (point: BioDataPoint) => {
    const intensity = point.value / 100;
    const rootColor = point.trend === 'growing' ? 'text-green-500' : 
                     point.trend === 'withering' ? 'text-orange-400' : 'text-gray-500';
    
    return (
      <div key={point.name} className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">{point.name}</span>
          <span className="text-lg font-bold text-gray-800">{point.value}%</span>
        </div>
        
        <div className="relative">
          {/* Main root trunk */}
          <div 
            className={`w-2 bg-gradient-to-b from-amber-800 to-amber-900 rounded-full mx-auto transition-all duration-1000 ${
              point.trend === 'growing' ? 'animate-pulse' : ''
            }`}
            style={{ height: `${20 + intensity * 40}px` }}
          />
          
          {/* Root branches */}
          <div className="flex justify-center space-x-1 mt-1">
            {[...Array(Math.floor(intensity * 5))].map((_, i) => (
              <div
                key={i}
                className={`w-1 bg-gradient-to-b from-amber-700 to-amber-800 rounded-full ${rootColor} ${
                  point.trend === 'growing' ? 'animate-pulse' : ''
                }`}
                style={{ 
                  height: `${10 + Math.random() * 20}px`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
          
          {/* Nutrient particles */}
          {point.trend === 'growing' && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 bg-green-400 rounded-full absolute animate-bounce"
                  style={{
                    left: `${Math.random() * 20 - 10}px`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: '2s'
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {data.map(getRootVisualization)}
    </div>
  );
};
