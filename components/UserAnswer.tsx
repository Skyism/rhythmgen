'use client';

import React from 'react';
import { UserAnswer as UserAnswerType } from '@/lib/types';
import { findRhythm } from '@/lib/utils';
import RhythmNotation from './RhythmNotation';

interface UserAnswerProps {
  userAnswer: UserAnswerType;
  isCorrect: boolean;
  tooManyNotes: boolean;
  onDeleteAnswer: (ansId: string) => void;
}

export default function UserAnswer({
  userAnswer,
  isCorrect,
  tooManyNotes,
  onDeleteAnswer,
}: UserAnswerProps) {
  return (
    <div className="mb-4">
      <b>Your Answer:</b>
      <div className="flex flex-wrap bg-gray-300 min-h-[70px] w-full p-2">
        {Object.entries(userAnswer).map(([id, name]) => {
          const rhythm = findRhythm(name);
          return (
            <div
              key={id}
              onClick={() => onDeleteAnswer(id)}
              className="border border-black h-[70px] w-[110px] text-center bg-white hover:bg-red-500 cursor-pointer transition flex items-center justify-center"
            >
              <RhythmNotation html={rhythm.html} />
            </div>
          );
        })}
        {isCorrect && (
          <span className="bg-green-400 border-2 border-green-600 text-green-600 rounded-full h-[70px] min-w-[70px] text-center text-[50px] flex items-center justify-center">
            ✓
          </span>
        )}
        {tooManyNotes && (
          <div className="bg-red-500 border border-white text-white rounded-full h-[70px] px-5 pt-[6px] text-center text-[25px] flex items-center justify-center">
            There are simply too many notes.
            <br />
            Just cut a few and it&apos;ll be perfect.
          </div>
        )}
      </div>
    </div>
  );
}
