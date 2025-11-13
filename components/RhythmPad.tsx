'use client';

import React from 'react';
import { rhythms } from '@/lib/data';

interface RhythmPadProps {
  onAddAnswer: (rhythmName: string) => void;
}

export default function RhythmPad({ onAddAnswer }: RhythmPadProps) {
  return (
    <div className="mb-4">
      <b>Rhythms:</b> (click to add to your answer)
      <div className="flex flex-wrap bg-gray-300 min-h-[70px] w-full p-2">
        {rhythms.map((rhythm) => (
          <div
            key={rhythm.name}
            onClick={() => onAddAnswer(rhythm.name)}
            className="border border-black text-[50px] h-[70px] w-[110px] text-center bg-white hover:bg-green-500 cursor-pointer transition flex items-center justify-center"
            dangerouslySetInnerHTML={{ __html: rhythm.html }}
          />
        ))}
      </div>
    </div>
  );
}
