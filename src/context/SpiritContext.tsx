
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SpiritState {
  season: 'spring' | 'summer' | 'autumn' | 'winter';
  moonPhase: 'new' | 'waxing' | 'full' | 'waning';
  elementalBalance: {
    earth: number;
    water: number;
    fire: number;
    air: number;
  };
  ritualEnergy: number;
  communityAlignment: number;
}

interface SpiritContextType {
  spirit: SpiritState;
  updateRitualEnergy: (energy: number) => void;
  performRitual: (type: string) => void;
}

const SpiritContext = createContext<SpiritContextType | undefined>(undefined);

interface SpiritProviderProps {
  children: ReactNode;
}

export const SpiritProvider: React.FC<SpiritProviderProps> = ({ children }) => {
  const [spirit, setSpirit] = useState<SpiritState>({
    season: 'spring',
    moonPhase: 'waxing',
    elementalBalance: {
      earth: 78,
      water: 82,
      fire: 65,
      air: 71
    },
    ritualEnergy: 73,
    communityAlignment: 89
  });

  // Update seasonal alignment based on time
  useEffect(() => {
    const updateSeasonalAlignment = () => {
      const now = new Date();
      const month = now.getMonth();
      
      let currentSeason: 'spring' | 'summer' | 'autumn' | 'winter';
      if (month >= 2 && month <= 4) currentSeason = 'spring';
      else if (month >= 5 && month <= 7) currentSeason = 'summer';
      else if (month >= 8 && month <= 10) currentSeason = 'autumn';
      else currentSeason = 'winter';
      
      setSpirit(prev => ({ ...prev, season: currentSeason }));
    };

    updateSeasonalAlignment();
    const interval = setInterval(updateSeasonalAlignment, 60000); // Check every minute
    
    return () => clearInterval(interval);
  }, []);

  const updateRitualEnergy = (energy: number) => {
    setSpirit(prev => ({ 
      ...prev, 
      ritualEnergy: Math.max(0, Math.min(100, energy))
    }));
  };

  const performRitual = (type: string) => {
    console.log(`Performing ritual: ${type}`);
    // Simulate ritual energy increase
    setSpirit(prev => ({
      ...prev,
      ritualEnergy: Math.min(100, prev.ritualEnergy + Math.random() * 20 + 5),
      communityAlignment: Math.min(100, prev.communityAlignment + Math.random() * 10 + 2)
    }));
  };

  return (
    <SpiritContext.Provider value={{ spirit, updateRitualEnergy, performRitual }}>
      {children}
    </SpiritContext.Provider>
  );
};

export const useSpirit = (): SpiritContextType => {
  const context = useContext(SpiritContext);
  if (!context) {
    throw new Error('useSpirit must be used within a SpiritProvider');
  }
  return context;
};
