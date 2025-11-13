import { rhythms } from './data';
import { Rhythm } from './types';

// Return a random integer in the range lo to hi (inclusive)
export function randInt(lo: number, hi: number): number {
  return lo + Math.floor(Math.random() * (1 + hi - lo));
}

// Return a random selection from the supplied list
export function randPick<T>(list: T[]): T {
  const idx = Math.floor(Math.random() * list.length);
  return list[idx];
}

// Find a rhythm by name
export function findRhythm(name: string): Rhythm {
  let r = rhythms[0];
  for (let i = 0; i < rhythms.length; i++) {
    if (rhythms[i].name === name) {
      r = rhythms[i];
      break;
    }
  }
  return r;
}

// Get a random rhythm
export function randRhythm(): Rhythm {
  return randPick(rhythms);
}
