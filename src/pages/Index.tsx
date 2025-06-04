
import React from 'react';
import { BioChart } from '@/components/BioChart';
import { PulseMap } from '@/components/PulseMap';
import { LedgerTotem } from '@/components/LedgerTotem';
import { SeasonalHeader } from '@/components/SeasonalHeader';
import { RegenerationMetrics } from '@/components/RegenerationMetrics';
import { SpiritProvider } from '@/context/SpiritContext';
import { useSunCycle } from '@/hooks/useSunCycle';
import { Leaf, Droplets, Wind } from 'lucide-react';

const Index = () => {
  const { currentPhase, luminosity } = useSunCycle();
  
  return (
    <SpiritProvider>
      <div className={`min-h-screen transition-all duration-1000 ${
        currentPhase === 'dawn' ? 'bg-gradient-to-br from-orange-200 to-yellow-100' :
        currentPhase === 'day' ? 'bg-gradient-to-br from-blue-50 to-green-50' :
        currentPhase === 'dusk' ? 'bg-gradient-to-br from-purple-200 to-pink-100' :
        'bg-gradient-to-br from-indigo-900 to-purple-900'
      }`} style={{ opacity: luminosity }}>
        
        <SeasonalHeader />
        
        <div className="container mx-auto px-6 py-8">
          {/* Biosphere Status Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            
            {/* Local Biome Health */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-green-200/50">
              <div className="flex items-center mb-6">
                <Leaf className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-green-800">Local Biome</h2>
              </div>
              <BioChart 
                data={[
                  { name: 'Soil Health', value: 78, trend: 'growing' },
                  { name: 'Biodiversity', value: 65, trend: 'stable' },
                  { name: 'Water Quality', value: 82, trend: 'growing' },
                  { name: 'Air Purity', value: 71, trend: 'withering' }
                ]}
                type="roots"
              />
            </div>

            {/* Regeneration Credits */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-200/50">
              <div className="flex items-center mb-6">
                <Droplets className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-blue-800">Regeneration Bank</h2>
              </div>
              <RegenerationMetrics />
            </div>

            {/* Community Pulse */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-200/50">
              <div className="flex items-center mb-6">
                <Wind className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-purple-800">Community Pulse</h2>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Collective Breath Rate</span>
                  <div className="w-16 h-2 bg-gradient-to-r from-green-300 to-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Ritual Participation</span>
                  <span className="text-2xl font-bold text-purple-600">847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Healing Ceremonies</span>
                  <span className="text-2xl font-bold text-purple-600">23</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mesh Network Visualization */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-emerald-200/50">
              <h3 className="text-xl font-bold text-emerald-800 mb-6">Bio-Signal Mesh Network</h3>
              <PulseMap />
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-amber-200/50">
              <h3 className="text-xl font-bold text-amber-800 mb-6">Regenerative Ledger</h3>
              <LedgerTotem />
            </div>
          </div>

          {/* Natural Forecasts */}
          <div className="mt-12 bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-teal-200/50">
            <h3 className="text-xl font-bold text-teal-800 mb-6">Planetary Wisdom Forecast</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl">
                <div className="text-3xl mb-2">🌱</div>
                <h4 className="font-bold text-green-800">Next 7 Days</h4>
                <p className="text-green-700 mt-2">Optimal planting window opens. Mercury in retrograde suggests deep root focus.</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl">
                <div className="text-3xl mb-2">🌊</div>
                <h4 className="font-bold text-blue-800">Water Ceremony</h4>
                <p className="text-blue-700 mt-2">Rain patterns align with community healing. Gather at dawn for collective blessing.</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl">
                <div className="text-3xl mb-2">🔥</div>
                <h4 className="font-bold text-purple-800">Transformation Phase</h4>
                <p className="text-purple-700 mt-2">Controlled burn recommended for sector 7. Phoenix energy rising.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SpiritProvider>
  );
};

export default Index;
