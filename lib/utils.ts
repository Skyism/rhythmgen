import { binaryRhythms, ternaryRhythms } from './data';
import { Rhythm, MeterType } from './types';

// Return a random integer in the range lo to hi (inclusive)
export function randInt(lo: number, hi: number): number {
  return lo + Math.floor(Math.random() * (1 + hi - lo));
}

// Return a random selection from the supplied list
export function randPick<T>(list: T[]): T {
  const idx = Math.floor(Math.random() * list.length);
  return list[idx];
}

// Get rhythms by meter type
export function getRhythmsByMeter(meterType: MeterType): Rhythm[] {
  return meterType === 'ternary' ? ternaryRhythms : binaryRhythms;
}

// Find a rhythm by name and meter type
export function findRhythm(name: string, meterType: MeterType = 'binary'): Rhythm {
  const rhythms = getRhythmsByMeter(meterType);
  let r = rhythms[0];
  for (let i = 0; i < rhythms.length; i++) {
    if (rhythms[i].name === name) {
      r = rhythms[i];
      break;
    }
  }
  return r;
}

// Get a random rhythm by meter type
export function randRhythm(meterType: MeterType = 'binary'): Rhythm {
  const rhythms = getRhythmsByMeter(meterType);
  return randPick(rhythms);
}

// Get a random rhythm that fits within the specified beats
export function randRhythmThatFits(maxBeats: number, meterType: MeterType = 'binary'): Rhythm {
  const rhythms = getRhythmsByMeter(meterType);
  // Filter to rhythms that fit
  const fittingRhythms = rhythms.filter(r => r.beats <= maxBeats);
  
  // If no rhythms fit exactly, use the smallest available rhythm
  if (fittingRhythms.length === 0) {
    const smallest = rhythms.reduce((min, r) => r.beats < min.beats ? r : min, rhythms[0]);
    return smallest;
  }
  
  return randPick(fittingRhythms);
}
