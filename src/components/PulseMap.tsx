
import React from 'react';

export const PulseMap = () => {
  const meshNodes = [
    { id: 1, x: 20, y: 30, type: 'plant', signal: 'strong', name: 'Oak Guardian' },
    { id: 2, x: 70, y: 20, type: 'human', signal: 'medium', name: 'River Community' },
    { id: 3, x: 50, y: 60, type: 'soil', signal: 'weak', name: 'Mycelial Network' },
    { id: 4, x: 80, y: 70, type: 'plant', signal: 'strong', name: 'Willow Council' },
    { id: 5, x: 30, y: 80, type: 'human', signal: 'strong', name: 'Healing Circle' },
    { id: 6, x: 60, y: 40, type: 'soil', signal: 'medium', name: 'Root Confluence' }
  ];

  const connections = [
    [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 1], [1, 3], [2, 4]
  ];

  const getNodeColor = (type: string, signal: string) => {
    const signalIntensity = signal === 'strong' ? '500' : signal === 'medium' ? '400' : '300';
    switch (type) {
      case 'plant': return `bg-green-${signalIntensity}`;
      case 'human': return `bg-blue-${signalIntensity}`;
      case 'soil': return `bg-amber-${signalIntensity}`;
      default: return `bg-gray-${signalIntensity}`;
    }
  };

  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'plant': return '🌿';
      case 'human': return '👥';
      case 'soil': return '🍄';
      default: return '●';
    }
  };

  return (
    <div className="relative w-full h-80 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl overflow-hidden">
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full">
        {connections.map(([start, end], index) => {
          const startNode = meshNodes.find(n => n.id === start);
          const endNode = meshNodes.find(n => n.id === end);
          if (!startNode || !endNode) return null;
          
          return (
            <line
              key={index}
              x1={`${startNode.x}%`}
              y1={`${startNode.y}%`}
              x2={`${endNode.x}%`}
              y2={`${endNode.y}%`}
              stroke="rgba(34, 197, 94, 0.3)"
              strokeWidth="2"
              className="animate-pulse"
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          );
        })}
      </svg>
      
      {/* Mesh nodes */}
      {meshNodes.map((node) => (
        <div
          key={node.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          {/* Pulse rings */}
          {node.signal === 'strong' && (
            <>
              <div className="absolute inset-0 w-8 h-8 bg-green-400 rounded-full opacity-20 animate-ping" />
              <div className="absolute inset-0 w-6 h-6 bg-green-400 rounded-full opacity-40 animate-ping" style={{ animationDelay: '0.5s' }} />
            </>
          )}
          
          {/* Node core */}
          <div className={`w-4 h-4 ${getNodeColor(node.type, node.signal)} rounded-full shadow-lg flex items-center justify-center text-xs`}>
            {getNodeIcon(node.type)}
          </div>
          
          {/* Tooltip */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {node.name}
            <div className="text-xs opacity-75 capitalize">{node.signal} signal</div>
          </div>
        </div>
      ))}
      
      {/* Bio-signal waves */}
      <div className="absolute bottom-4 left-4 text-xs text-gray-600 bg-white/60 px-3 py-2 rounded-lg backdrop-blur-sm">
        <div className="font-semibold mb-1">Active Bio-Signals</div>
        <div className="flex space-x-4">
          <span>🌿 Plants: 847</span>
          <span>👥 Humans: 234</span>
          <span>🍄 Soil: 156</span>
        </div>
      </div>
    </div>
  );
};
