'use client';

import React from 'react';
import { MeterType, TimeSignature } from '@/lib/types';
import { ternaryTimeSignatures } from '@/lib/data';

interface RhythmControlsProps {
  meterType: MeterType;
  beatsPerMinute: number;
  beatsPerBar: number;
  totalBars: number;
  varyPitch: boolean;
  timeSignature: TimeSignature;
  onPlayNew: () => void;
  onReplay: () => void;
  onShow: () => void;
  onBpmChange: (value: number) => void;
  onBpbChange: (value: number) => void;
  onBarsChange: (value: number) => void;
  onVaryPitchChange: (checked: boolean) => void;
  onTimeSignatureChange: (ts: TimeSignature) => void;
}

export default function RhythmControls({
  meterType,
  beatsPerMinute,
  beatsPerBar,
  totalBars,
  varyPitch,
  timeSignature,
  onPlayNew,
  onReplay,
  onShow,
  onBpmChange,
  onBpbChange,
  onBarsChange,
  onVaryPitchChange,
  onTimeSignatureChange,
}: RhythmControlsProps) {
  return (
    <div className="mb-6">
      <table className="w-full border-collapse">
        <tbody>
          <tr>
            <td rowSpan={2} className="pr-4">
              <button
                onClick={onPlayNew}
                className="mr-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition"
              >
                Play New
              </button>
              <button
                onClick={onReplay}
                className="mr-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded transition"
              >
                Re-Play
              </button>
              <button
                onClick={onShow}
                className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded transition"
              >
                Show
              </button>
            </td>
            <td className="px-2">
              <div id="bpmTxt" className="font-semibold">
                {beatsPerMinute} Beats/Min.
              </div>
            </td>
            {meterType === 'ternary' ? (
              <td className="px-2">
                <div className="font-semibold mb-1">Time Signature</div>
                <select
                  value={`${timeSignature.numerator}/${timeSignature.denominator}`}
                  onChange={(e) => {
                    const [num, den] = e.target.value.split('/').map(Number);
                    onTimeSignatureChange({ numerator: num, denominator: den });
                  }}
                  className="w-full px-2 py-1 border border-gray-300 rounded"
                >
                  {ternaryTimeSignatures.map((ts) => (
                    <option key={`${ts.numerator}/${ts.denominator}`} value={`${ts.numerator}/${ts.denominator}`}>
                      {ts.numerator}/{ts.denominator}
                    </option>
                  ))}
                </select>
              </td>
            ) : (
              <td className="px-2">
                <div id="bpbTxt" className="font-semibold">
                  {beatsPerBar} Beats/Bar
                </div>
              </td>
            )}
            <td className="px-2">
              <div id="barTxt" className="font-semibold">
                {totalBars} Bar{totalBars === 1 ? '' : 's'}
              </div>
            </td>
            <td rowSpan={2} className="pl-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={varyPitch}
                  onChange={(e) => onVaryPitchChange(e.target.checked)}
                  className="mr-2 w-5 h-5"
                />
                <span>Vary Pitch</span>
              </label>
            </td>
          </tr>
          <tr>
            <td className="px-2">
              <input
                type="range"
                min="20"
                max="200"
                value={beatsPerMinute}
                onChange={(e) => onBpmChange(Number(e.target.value))}
                className="w-full"
              />
            </td>
            {meterType === 'ternary' ? (
              <td className="px-2">
                <div className="font-semibold">
                  {beatsPerBar} Beats/Bar
                </div>
              </td>
            ) : (
              <td className="px-2">
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={beatsPerBar}
                  onChange={(e) => onBpbChange(Number(e.target.value))}
                  className="w-full"
                />
              </td>
            )}
            <td className="px-2">
              <input
                type="range"
                min="1"
                max="5"
                value={totalBars}
                onChange={(e) => onBarsChange(Number(e.target.value))}
                className="w-full"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
