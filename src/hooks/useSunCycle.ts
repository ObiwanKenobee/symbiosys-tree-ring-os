
import { useState, useEffect } from 'react';

interface SunCycleState {
  currentPhase: 'dawn' | 'day' | 'dusk' | 'night';
  season: 'spring' | 'summer' | 'autumn' | 'winter';
  luminosity: number;
  timeUntilNext: string;
}

export const useSunCycle = (): SunCycleState => {
  const [cycleState, setCycleState] = useState<SunCycleState>({
    currentPhase: 'day',
    season: 'spring',
    luminosity: 1,
    timeUntilNext: ''
  });

  useEffect(() => {
    const updateCycle = () => {
      const now = new Date();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const month = now.getMonth();
      
      // Determine current phase based on time
      let phase: 'dawn' | 'day' | 'dusk' | 'night';
      let nextPhaseTime: number;
      let nextPhaseName: string;
      
      if (hour >= 5 && hour < 7) {
        phase = 'dawn';
        nextPhaseTime = 7 * 60; // 7:00 AM
        nextPhaseName = 'day';
      } else if (hour >= 7 && hour < 18) {
        phase = 'day';
        nextPhaseTime = 18 * 60; // 6:00 PM
        nextPhaseName = 'dusk';
      } else if (hour >= 18 && hour < 20) {
        phase = 'dusk';
        nextPhaseTime = 20 * 60; // 8:00 PM
        nextPhaseName = 'night';
      } else {
        phase = 'night';
        nextPhaseTime = 5 * 60; // 5:00 AM next day
        nextPhaseName = 'dawn';
      }
      
      // Calculate time until next phase
      const currentMinutes = hour * 60 + minute;
      let minutesUntilNext = nextPhaseTime - currentMinutes;
      if (minutesUntilNext <= 0) {
        minutesUntilNext += 24 * 60; // Next day
      }
      
      const hoursUntilNext = Math.floor(minutesUntilNext / 60);
      const minsUntilNext = minutesUntilNext % 60;
      const timeUntilNext = `${hoursUntilNext}h ${minsUntilNext}m`;
      
      // Determine season
      let season: 'spring' | 'summer' | 'autumn' | 'winter';
      if (month >= 2 && month <= 4) season = 'spring';
      else if (month >= 5 && month <= 7) season = 'summer';
      else if (month >= 8 && month <= 10) season = 'autumn';
      else season = 'winter';
      
      // Calculate luminosity based on phase and season
      let baseLuminosity: number;
      switch (phase) {
        case 'dawn': baseLuminosity = 0.7; break;
        case 'day': baseLuminosity = 1; break;
        case 'dusk': baseLuminosity = 0.8; break;
        case 'night': baseLuminosity = 0.4; break;
      }
      
      // Adjust for season
      const seasonalMultiplier = season === 'summer' ? 1.1 : 
                               season === 'winter' ? 0.8 : 1;
      
      const luminosity = Math.min(1, baseLuminosity * seasonalMultiplier);
      
      setCycleState({
        currentPhase: phase,
        season,
        luminosity,
        timeUntilNext
      });
    };

    updateCycle();
    const interval = setInterval(updateCycle, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  return cycleState;
};
