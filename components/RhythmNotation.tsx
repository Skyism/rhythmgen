'use client';

import React from 'react';

interface RhythmNotationProps {
  html: string;
  className?: string;
}

export default function RhythmNotation({
  html,
  className = '',
}: RhythmNotationProps) {
  return (
    <div
      className={className}
      style={{
        width: '110px',
        height: '70px',
        display: 'inline-block',
        overflow: 'visible'
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
