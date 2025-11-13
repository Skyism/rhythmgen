# 2ManyNotes - React/Next.js Version

An interactive rhythm training application built with Next.js, React, TypeScript, and Tone.js.

## Features

- **Generate Random Rhythm Sequences**: Creates random musical rhythm patterns
- **Audio Playback**: Plays sequences using a sampled piano through Tone.js
- **Interactive Learning**: Click rhythms to build your answer
- **Immediate Feedback**: Get instant validation of your transcription
- **Customizable Settings**:
  - Adjustable tempo (BPM)
  - Variable time signatures
  - Configurable number of bars
  - Optional pitch variation

## Tech Stack

- **Next.js 14+** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Tone.js** - Web Audio synthesis and scheduling

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## How to Use

1. Click **"Play New"** to generate and play a new random rhythm
2. Click **"Re-Play"** to hear the rhythm again
3. Click on rhythm buttons in the **Rhythms** section to add them to your answer
4. Click on rhythms in **Your Answer** to remove them
5. The app will automatically check your answer and provide feedback:
   - Green checkmark = correct!
   - Red message = too many notes

## Rhythm Patterns

The app includes 13 different rhythm patterns:
- Quarter notes (Q)
- Eighth notes (E)
- Sixteenth notes (S)
- Triplets (T)
- Dotted rhythms
- Various combinations

## Project Structure

```
rhythmgen-nextjs/
├── app/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── RhythmGen.tsx     # Main component with state & audio
│   ├── RhythmControls.tsx # Control panel
│   ├── UserAnswer.tsx    # User's answer display
│   └── RhythmPad.tsx     # Rhythm selection pad
├── lib/
│   ├── types.ts          # TypeScript types & Rhythm class
│   ├── data.ts           # Rhythm definitions & constants
│   └── utils.ts          # Utility functions
└── package.json
```

## License

ISC

## Credits

Converted from the original vanilla JavaScript implementation to React/Next.js with TypeScript.
