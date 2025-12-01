import { Rhythm, TimeSignature } from './types';

// Image data for notes
export const dEdata = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAyCAYAAADSprJaAAAABmJLR0QA8gDhABUOSuY+AAAACXBIWXMAAA7BAAAOwQG4kWvtAAACEUlEQVRYw+3YzUtVQRgG8N+RW2QGWpuQigpuH0QUJS2UoIiSCoR2tahok+4SCvwnatGqaNFCgqho0SaFMBLENkK0cqMEfULkoogoKjotGkFOV72cc68Dch84nJlhZs5z3veZd94ZGmiggQYaaGCZYxApRrGmlhM35RizBa2xSWzGeSQx3TH7XIlBJEsixTWsiE0ixR20xCaRYriIWJtqRPA4ruZ1TR4SY9iDG/gzp/0iLsUIVhsxMsctH1Beane8Qw9uh3o7zsbQxPcQM56G+mmsjyHML+jHDHZifwwSMIn7obwvFokUT0J5RywS8BpfsSEbRdNUebDT+D+yXanusVv1yifaA5H/+gz1Voi0/S/HoSRNy5Jkup4BJk2d6Ku0306MdtXDHbN4j2/Va6K2VmjGyhA70tnGJDF8qrdC7wOHn9dDEx3BApcruGTJhNkTNrWjMZfoNnzEq1gkkuCOF2E3rRqledpX4SC60YZpbF1krjZsx0P8KKruAfxcIJWbTxMdeBPe8lqiFfdCqpYHnWETm8xrgRJuLvD3i1miGUM4UyTH3BtOVXmxC2vxrAiJQ1hd5ZiZjPASnMOjsDwLWaJaTOB35oC8G3eLnjt+Vdn/Mx5nrHAhLMu3RQNNX5WivJ45BJdwslZXBZswtQiBkVrfS1TCEXyah8ADrKvXh7P5TksgcyyE7umg+qm5+cGyxF8FCq5Ni9xw1gAAAABJRU5ErkJggg==";

export const dQdata = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAyCAYAAABGQBuoAAAABmJLR0QA8gDhABUOSuY+AAAACXBIWXMAAA7BAAAOwQG4kWvtAAABFklEQVRYw+3Xr0sEQRjG8c+qQRAuCSKc7QS7GrxkUdAgmu1n06b/h80o/g16VTjuisUkBsuB1WoQdQwO/rpTdmUXROaBCcv77vudnWfmHZakpKSkpDdNo4+AgyIvjlQ9swRIgARIgATIqxA0jpd0X9t5M1jtHJV6H5y1hBh7H3uXXRgrYfZrO9mQwMV5UwiNv+9BlmlvtoYEFpd7suymFA8qN/l/H7TvtukUVtCMOX3UygDUcYitKr5gAW1MVuFBHSdlF/8I2MZcVbtoIhqaV7dFATXM5sy/x3VRwDMec+Z3cFV0mcZxOtDPB8dTwaX8pI1Y4CfAPrLfAkZjgWGFH7Abc4q38y/PM1jHfPSlFw/f3Z/9uXsBcsZUp5URIn4AAAAASUVORK5CYII=";

export const Edata = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAyCAYAAAC3S0AlAAAABmJLR0QA8gDhABUOSuY+AAAACXBIWXMAAA7BAAAOwQG4kWvtAAABxUlEQVRYw+3WzatNURjH8c8+HXIduZeJvIW6XpKIO1JKKZIyZoBMdGcMlH+CgREjAykhAxOUrihDZWBwJ07Ka+EWkgjdbfLcOu32vmd3Wruk86vdXmvvvb7r2c/zrLUehhpqqKH+Y11FjsdYUmdAa4BJ1mO0Kfg6nEDWhFvmrrMpJyjCc1zAgqbgOa6h0xQ8x/2yILcSuewgzhddNAj8CbbjEmZ7np/C6ZSLaA2metzzHuOp3PIWh3El+itxLKXPf0TOP4z+EaxIGdCvOIMZbMGulHCYxs1o70wNz/Eg2ptTw+EVvmE1OqnhH/EZbWQteT7e1OnSaoj7Dt9bsqybEDqChZH7eWrLl2FppGVyt6wK6583Ad+ID3iZGp5hAs9id9Su+HAR9uAAxtDFhj7wMWzCbfysivY5/JrnSKsqiibwOu6Klo/iRhxZg2h3ZMl08UUbl+extp/lI7iHo2UrdEdUUYNqa+T4ozL4XiyuCZopBCzDcdyJNCy1vK6e4k+hMN2G61Ub1++a4C+4W7D6ZKTfm6pBkzWDebFQfLZxqF9JvRYv+oCn6tblZdqHTxXgW1g+yH7Qq05Msj+2gG5kwdxf/Tv6C8vGhpn6gpRyAAAAAElFTkSuQmCC";

export const Hdata = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAyCAYAAABs8OoHAAAABmJLR0QA8gDhABUOSuY+AAAACXBIWXMAAA7BAAAOwQG4kWvtAAABCElEQVRIx+3VvyuFURzH8dflikHyq0QpFmVTGPwBDG4sNwYWf4HF4E8xWRSTXQaLwUBGmQzKajAo3dwey3nqOB2LTDqfeuqc73Pe3+/nfJ/TeSgqKgKTeEaFQ+j5baYCFrCABfzfYDMT68US2hjGB+7TtSk4gzOsRLEuGqm7eLKA6wh6whr6MYjjnOUx3IYrvsIlRpM183itfwG11S0sh/EVtvGWSZ4VWx3ARpg/YCcDNbGX9mQi7KeL1R+63w7vK+zWwfFQ6Q4jGaiF9wC9YDa2cY7HUL1WI+y9EzXtIM26GaycYgpzOImACkfoS8FGyFZlng72w4n6BsSaxjoW8YkbXITv9zf6AjKgNVxU+QybAAAAAElFTkSuQmCC";

export const Qdata = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAyCAYAAACDMoE5AAAABmJLR0QA8gDhABUOSuY+AAAACXBIWXMAAA7BAAAOwQG4kWvtAAAAv0lEQVRIx+3WP2pCQRCA8V9MioBgFQiCKQX7pLK3sQik9g6WyT1yhZxBPIDgEUJawdbWQtSkGcJDXl6ef8r5YJud+WaZYWGXJEnOoo0FvvEGjXOqpZxyyimnfAo3FbF7DNCPvAVa/8kdvOPl2JOfMMXdsT138FFXPJRH6J0y7WYMpy7LotxCt6a4xldR3mNbU57hs7hxi0m8vVVr91d7zxGskl9xVSZfR7BM2mAcOb+UVXnAEI8xh3lcnNVFPyk/Rgor7P6Xu+IAAAAASUVORK5CYII=";

export const Sdata = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAyCAYAAABGQBuoAAAABmJLR0QA8gDhABUOSuY+AAAACXBIWXMAAA7BAAAOwQG4kWvtAAACCElEQVRYw+3Xz4tNYRgH8M81c9VIfqyYMqGMQoxolMVkQ5FmY6cpfwGlJmzsJFlYmA3CQpFsLNhSLEgoFiIzUQizUMyCaVxcm+fqOO65986955bFfep0z32fc57v877f5/m+76FjHetYxzr2lx1BGW/Q2+hLc5oAWooV7QSYi/NY1S4AWIfnOIyevDlIX1MYQTHPGSRtAS7jIVa3A6BiG/EEu1sF+I5bKFXxzYvZbGmFgxkMoQvrcb0KLzebIT9J8niqTNcGBxX/V2xutYreYjDh78GFhH+4VZL7cA/7UMA0RnE7/P15VFERl3AoOJnCWPgm8izTk5F9Ae/xOWbUdJm+qjJ+AnvifhKvmwWYxDYM4FGqp85iRyTwIY/9oIijVfpgJC+pKOE4DuBXjE1Hn+SmRWWcw8VEP2zKW+xKOI1P8X+wHWr6EncT3OQO8CNVVbkDiG1UUsrzBqgszZ+ZdNd4cCAUsRcfGzxF9OMbHmc90IW9IVrljCvr4FXAFTzAwqysz9QIXA9gCV5gf1b2ow0ErwWwMzRoZdbmMdECQDeu4lgs1T+2q8Hg5aiQxan3t8aRpS+rDzbMohSf4UuKu4M4hXdZAKVZCNu1+E3OfibGM217yG295al23hnGsnqZzcedOsHHsbyVNl8TdVwt+P3ZfHSkuy/dbENR04tCIm7gKX7+lx92vwGCSLhx/xNZOgAAAABJRU5ErkJggg==";

export const Tdata = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAyCAYAAAAX1CjLAAAABmJLR0QA8gDhABUOSuY+AAAACXBIWXMAAA7BAAAOwQG4kWvtAAACgElEQVRo3u2ZTWgTQRiGn8SkPwaqaECFiFQsWC2UUi+KUBT8QVREjxqvHgpeUurdUwo9eOzFQ5GAeLAKLkK1UhA8KJ7EGFCQgj8HK9qDEpvE8ZCxbNdt9tt0sGadF/aQzcy7+8z37TfDDKyR1BS5XlD8vvKqQKtrCUrD1H/3KqZUrqXBSiMUyTrKfc/JohgpFYmanCzKC9v6qZmnQBRS0beARC1ay1Kxb1yhVHe00tFwZYzbQmG8WLjmMUX3eF9EYJfgol48rExrepoLKXfq/NvX2lTFv6GEtOHMDC9+wDyQjhMvtNN+dzUPrlDZWYtVrypFW4LEWJLk89X4lSkPK9RQjFhREa4ObQPmdKivGBjUQeCb9jtlwG9Se81GOhUtmAWzYBbMglkwC2bBLJgFs2AWzIJZMAv2X4M12qXaAhwBDuh2c0BXk8+JATuAY9Q3carAAtDWpF8HcBA4CmwEPgKBx08Z4DaNNyTD7FLtAZ4G+El3qTqBUWCxgdesX8T2AfeBtKGMOAvcBJIGvDZor+Nhv7EMcMMg1ABw3RBUAshLobxg54HdBr/dYZ3/JtQPXGymKqZ0oZDqXcD/m4FDQq8q8CWgzRCwXug37wbrAnqEHb8HJUEB2ir0ew+8EURMqmdusJ965CR6DBQFUagJ/e4BHwLaVIReXwHHOy84BJ871YQpmwZeCvw+AXsFfpeQnYtd03PmMp3WL96o46hfxxWUEwzSOaFXBngV4PdQTwl/aJ1+cb9Oi8Bl3UaqTmBiBb8F4GSIQQLYryPs53cL2ORd6ni1HTjhWvo80ZP25yaXUj3AGWAXUAYeAI+on42FVQo4rD+HDuANcAd4rQGjr18R6SaupsbPEQAAAABJRU5ErkJggg==";

// Create image tags from data URIs
const xH = `<img src="${Hdata}" alt="Half note" />`;
const xQ = `<img src="${Qdata}" alt="Quarter note" />`;
const xdQ = `<img src="${dQdata}" alt="Dotted quarter" />`;
const xE = `<img src="${Edata}" alt="Eighth note" />`;
const xdE = `<img src="${dEdata}" alt="Dotted eighth" />`;
const xS = `<img src="${Sdata}" alt="Sixteenth note" />`;
const xTTT = `<img src="${Tdata}" alt="Triplet" />`;

// Compound rhythms
const xdES = xdE + xS;
const xEE = xE + xE;
const xSdE = xS + xdE;
const xESS = xE + xS + xS;
const xSES = xS + xE + xS;
const xSSE = xS + xS + xE;
const xSSSS = xS + xS + xS + xS;
const xdQE = xdQ + xE;
const xEdQ = xE + xdQ;
const xEQE = xE + xQ + xE;
const xdQSS = xdQ + xS + xS;
const xSSdQ = xS + xS + xdQ;
const xEQSS = xE + xQ + xS + xS;
const xSSQE = xS + xS + xQ + xE;
const xSSQSS = xS + xS + xQ + xS + xS;

// Setup our collection of binary rhythms using images
export const binaryRhythms: Rhythm[] = [
  // Quarter note: 4n = 1 beat
  new Rhythm("Q", xQ, ["4n"], 1),

  // Dotted eighth + sixteenth: 8n.(0.75) + 16n(0.25) = 1 beat
  new Rhythm("dES", xdES, ["8n.", "16n"], 1),

  // Two eighth notes: 8n(0.5) + 8n(0.5) = 1 beat
  new Rhythm("EE", xEE, ["8n", "8n"], 1),

  // Sixteenth + dotted eighth: 16n(0.25) + 8n.(0.75) = 1 beat
  new Rhythm("SdE", xSdE, ["16n", "8n."], 1),

  // Triplet: 8t(0.33) + 8t(0.33) + 8t(0.33) = 1 beat
  new Rhythm("TTT", xTTT, ["8t", "8t", "8t"], 1),

  // Eighth + two sixteenths: 8n(0.5) + 16n(0.25) + 16n(0.25) = 1 beat
  new Rhythm("ESS", xESS, ["8n", "16n", "16n"], 1),

  // Sixteenth + eighth + sixteenth: 16n(0.25) + 8n(0.5) + 16n(0.25) = 1 beat
  new Rhythm("SES", xSES, ["16n", "8n", "16n"], 1),

  // Two sixteenths + eighth: 16n(0.25) + 16n(0.25) + 8n(0.5) = 1 beat
  new Rhythm("SSE", xSSE, ["16n", "16n", "8n"], 1),

  // Four sixteenths: 16n(0.25) * 4 = 1 beat
  new Rhythm("SSSS", xSSSS, ["16n", "16n", "16n", "16n"], 1),

  // Half note: 2n = 2 beats
  new Rhythm("H", xH, ["2n"], 2),

  // Dotted quarter + eighth triplet: 4n.(1.5) + 8t(0.33) = ~2 beats
  new Rhythm("dQE", xdQE, ["4n.", "8t"], 2),

  // Eighth + dotted quarter: 8n(0.5) + 4n.(1.5) = 2 beats
  new Rhythm("EdQ", xEdQ, ["8n", "4n."], 2),

  // Eighth + quarter + eighth: 8n(0.5) + 4n(1) + 8n(0.5) = 2 beats
  new Rhythm("EQE", xEQE, ["8n", "4n", "8n"], 2),

  // Dotted quarter + two sixteenths: 4n.(1.5) + 16n(0.25) + 16n(0.25) = 2 beats
  new Rhythm("dQSS", xdQSS, ["4n.", "16n", "16n"], 2),

  // Two sixteenths + dotted quarter: 16n(0.25) + 16n(0.25) + 4n.(1.5) = 2 beats
  new Rhythm("SSdQ", xSSdQ, ["16n", "16n", "4n."], 2),

  // Eighth + quarter + two sixteenths: 8n(0.5) + 4n(1) + 16n(0.25) + 16n(0.25) = 2 beats
  new Rhythm("EQSS", xEQSS, ["8n", "4n", "16n", "16n"], 2),

  // Two sixteenths + quarter + eighth: 16n(0.25) + 16n(0.25) + 4n(1) + 8n(0.5) = 2 beats
  new Rhythm("SSQE", xSSQE, ["16n", "16n", "4n", "8n"], 2),

  // Two sixteenths + quarter + two sixteenths: 16n(0.25) + 16n(0.25) + 4n(1) + 16n(0.25) + 16n(0.25) = 2 beats
  new Rhythm("SSQSS", xSSQSS, ["16n", "16n", "4n", "16n", "16n"], 2),
];

// Ternary meter rhythms (beat = dotted quarter = 3 eighth notes)
// Additional compound rhythms for ternary
const xEEE = xE + xE + xE; // 3 eighths
const xQE = xQ + xE; // quarter + eighth
const xEQ = xE + xQ; // eighth + quarter
const xSSEE = xS + xS + xE + xE; // 2 sixteenths + 2 eighths
const xEESS = xE + xE + xS + xS; // 2 eighths + 2 sixteenths
const xSSSSE = xS + xS + xS + xS + xE; // 4 sixteenths + eighth
const xSSESS = xS + xS + xE + xS + xS; // 2 sixteenths + eighth + 2 sixteenths
const xESSSS = xE + xS + xS + xS + xS; // eighth + 4 sixteenths
const xSSSSSS = xS + xS + xS + xS + xS + xS; // 6 sixteenths
// Dotted half note - using half note image (will represent dotted half in ternary context)
const xdH = xH; // dotted half note (2 beats in ternary)

// Additional ternary rhythms with dotted eighths and mixed note values
const xQSS = xQ + xS + xS; // quarter + 2 sixteenths
const xSSQ = xS + xS + xQ; // 2 sixteenths + quarter
const xdESSS = xdE + xS + xS + xS; // dotted eighth + 3 sixteenths
const xSdESS = xS + xdE + xS + xS; // sixteenth + dotted eighth + 2 sixteenths
const xSSdES = xS + xS + xdE + xS; // 2 sixteenths + dotted eighth + 1 sixteenth
const xSSSdE = xS + xS + xS + xdE; // 3 sixteenths + dotted eighth
const xdEES = xdE + xE + xS; // dotted eighth + eighth + sixteenth
const xSEdE = xS + xE + xdE; // sixteenth + eighth + dotted eighth

// Setup our collection of ternary rhythms using images
// In ternary meters, the beat is a dotted quarter note (3 eighth notes)
export const ternaryRhythms: Rhythm[] = [
  // Dotted quarter: 4n. = 1 beat (3 eighth notes)
  new Rhythm("dQ", xdQ, ["4n."], 1),

  // Three eighths: 8n + 8n + 8n = 1 beat
  new Rhythm("EEE", xEEE, ["8n", "8n", "8n"], 1),

  // Quarter + eighth: 4n(2/3) + 8n(1/3) = 1 beat (approximated as 4n + 8n, but beats = 1.5, so we'll use 1.5)
  new Rhythm("QE", xQE, ["4n", "8n"], 1.5),

  // Eighth + quarter: 8n(1/3) + 4n(2/3) = 1 beat (approximated, beats = 1.5)
  new Rhythm("EQ", xEQ, ["8n", "4n"], 1.5),

  // Two sixteenths + two eighths: 16n + 16n + 8n + 8n = 1 beat
  new Rhythm("SSEE", xSSEE, ["16n", "16n", "8n", "8n"], 1),

  // Eighth + two sixteenths + eighth: 8n + 16n + 16n + 8n = 1 beat
  new Rhythm("ESSE", xE + xS + xS + xE, ["8n", "16n", "16n", "8n"], 1),

  // Two eighths + two sixteenths: 8n + 8n + 16n + 16n = 1 beat
  new Rhythm("EESS", xEESS, ["8n", "8n", "16n", "16n"], 1),

  // Four sixteenths + eighth: 16n + 16n + 16n + 16n + 8n = 1 beat
  new Rhythm("SSSSE", xSSSSE, ["16n", "16n", "16n", "16n", "8n"], 1),

  // Two sixteenths + eighth + two sixteenths: 16n + 16n + 8n + 16n + 16n = 1 beat
  new Rhythm("SSESS", xSSESS, ["16n", "16n", "8n", "16n", "16n"], 1),

  // Eighth + four sixteenths: 8n + 16n + 16n + 16n + 16n = 1 beat
  new Rhythm("ESSSS", xESSSS, ["8n", "16n", "16n", "16n", "16n"], 1),

  // Six sixteenths: 16n + 16n + 16n + 16n + 16n + 16n = 1 beat
  new Rhythm("SSSSSS", xSSSSSS, ["16n", "16n", "16n", "16n", "16n", "16n"], 1),

  // Quarter + two sixteenths: 4n + 16n + 16n = 1 beat
  new Rhythm("QSS", xQSS, ["4n", "16n", "16n"], 1),

  // Two sixteenths + quarter: 16n + 16n + 4n = 1 beat
  new Rhythm("SSQ", xSSQ, ["16n", "16n", "4n"], 1),

  // Dotted eighth + three sixteenths: 8n. + 16n + 16n + 16n = 1 beat
  new Rhythm("dESSS", xdESSS, ["8n.", "16n", "16n", "16n"], 1),

  // Sixteenth + dotted eighth + two sixteenths: 16n + 8n. + 16n + 16n = 1 beat
  new Rhythm("SdESS", xSdESS, ["16n", "8n.", "16n", "16n"], 1),

  // Two sixteenths + dotted eighth + sixteenth: 16n + 16n + 8n. + 16n = 1 beat
  new Rhythm("SSdES", xSSdES, ["16n", "16n", "8n.", "16n"], 1),

  // Three sixteenths + dotted eighth: 16n + 16n + 16n + 8n. = 1 beat
  new Rhythm("SSSdE", xSSSdE, ["16n", "16n", "16n", "8n."], 1),

  // Dotted eighth + eighth + sixteenth: 8n. + 8n + 16n = 1 beat
  new Rhythm("dEES", xdEES, ["8n.", "8n", "16n"], 1),

  // Sixteenth + eighth + dotted eighth: 16n + 8n + 8n. = 1 beat
  new Rhythm("SEdE", xSEdE, ["16n", "8n", "8n."], 1),

  // Dotted half note: 2n. = 2 beats
  new Rhythm("dH", xdH, ["2n."], 2),
];

// Ternary time signatures
export const ternaryTimeSignatures: TimeSignature[] = [
  { numerator: 3, denominator: 8 },
  { numerator: 6, denominator: 8 },
  { numerator: 9, denominator: 8 },
  { numerator: 12, denominator: 8 },
  { numerator: 4, denominator: 8 },
];

// Export rhythms for backward compatibility (defaults to binary)
export const rhythms = binaryRhythms;

// Musical notes
export const myNotes = [
  "C3", "D3", "E3", "F3", "G3", "A4", "B4",
  "C4", "D4", "E4", "F4", "G4", "A5", "B5", "C5"
];

// Transition matrix for Markov chain-based pitch selection
export const transitionMatrix = [
  [40, 10, 13, 3, 13, 16, 5],
  [11, 47, 11, 3, 7, 12, 11],
  [7, 14, 47, 1, 8, 12, 11],
  [9, 10, 14, 37, 13, 10, 7],
  [5, 7, 12, 1, 11, 15, 49],
  [9, 8, 7, 3, 45, 16, 13],
  [5, 10, 12, 1, 15, 48, 8]
];
