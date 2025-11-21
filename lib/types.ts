// A class to hold rhythm info
export class Rhythm {
  name: string;
  html: string; // HTML string with image tag
  durations: string[];
  beats: number;

  constructor(name: string, html: string, durations: string[], beats: number) {
    this.name = name;
    this.html = html;
    this.durations = durations;
    this.beats = beats;
  }
}

export interface UserAnswer {
  [key: string]: string;
}

export type MeterType = 'binary' | 'ternary';

export interface TimeSignature {
  numerator: number;
  denominator: number;
}
