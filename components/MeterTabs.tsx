'use client';

import React, { useState } from 'react';
import { MeterType } from '@/lib/types';
import RhythmGen from './RhythmGen';

export default function MeterTabs() {
  const [activeTab, setActiveTab] = useState<MeterType>('binary');

  return (
    <div>
      <div className="flex border-b border-gray-300 mb-6">
        <button
          onClick={() => setActiveTab('binary')}
          className={`px-6 py-3 font-semibold transition ${
            activeTab === 'binary'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Binary
        </button>
        <button
          onClick={() => setActiveTab('ternary')}
          className={`px-6 py-3 font-semibold transition ${
            activeTab === 'ternary'
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Ternary
        </button>
      </div>
      <RhythmGen meterType={activeTab} />
    </div>
  );
}


