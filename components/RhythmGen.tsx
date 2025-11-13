'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import * as Tone from 'tone';
import { UserAnswer } from '@/lib/types';
import { myNotes, transitionMatrix } from '@/lib/data';
import { randInt, randPick, randRhythm, findRhythm } from '@/lib/utils';
import RhythmControls from './RhythmControls';
import UserAnswerComponent from './UserAnswer';
import RhythmPad from './RhythmPad';
import RhythmNotation from './RhythmNotation';

export default function RhythmGen() {
  // State management
  const [beatsPerMinute, setBeatsPerMinute] = useState(60);
  const [beatsPerBar, setBeatsPerBar] = useState(4);
  const [totalBars, setTotalBars] = useState(1);
  const [varyPitch, setVaryPitch] = useState(true);
  const [realAnswer, setRealAnswer] = useState<string[]>([]);
  const [userAnswer, setUserAnswer] = useState<UserAnswer>({});
  const [currInfo, setCurrInfo] = useState<Array<{ type: 'rhythm' | 'barline'; html: string }>>([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [tooManyNotes, setTooManyNotes] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  // Refs for Tone.js objects
  const partRef = useRef<Tone.Part | null>(null);
  const pianoRef = useRef<Tone.Sampler | null>(null);
  const nextAnsIdRef = useRef(1);

  // Initialize Tone.js piano sampler
  useEffect(() => {
    pianoRef.current = new Tone.Sampler({
      urls: {
        "A0": "A0.mp3",
        "C1": "C1.mp3",
        "D#1": "Ds1.mp3",
        "F#1": "Fs1.mp3",
        "A1": "A1.mp3",
        "C2": "C2.mp3",
        "D#2": "Ds2.mp3",
        "F#2": "Fs2.mp3",
        "A2": "A2.mp3",
        "C3": "C3.mp3",
        "D#3": "Ds3.mp3",
        "F#3": "Fs3.mp3",
        "A3": "A3.mp3",
        "C4": "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        "A4": "A4.mp3",
        "C5": "C5.mp3",
        "D#5": "Ds5.mp3",
        "F#5": "Fs5.mp3",
        "A5": "A5.mp3",
        "C6": "C6.mp3",
        "D#6": "Ds6.mp3",
        "F#6": "Fs6.mp3",
        "A6": "A6.mp3",
        "C7": "C7.mp3",
        "D#7": "Ds7.mp3",
        "F#7": "Fs7.mp3",
        "A7": "A7.mp3",
        "C8": "C8.mp3",
      },
      release: 0.3,
      baseUrl: "https://tonejs.github.io/audio/salamander/",
    }).toDestination();

    partRef.current = new Tone.Part((time, value: { pitch: string; length: string }) => {
      if (pianoRef.current) {
        pianoRef.current.triggerAttackRelease(value.pitch, value.length, time);
      }
    });

    // Set initial BPM
    Tone.getTransport().bpm.value = 60;

    return () => {
      if (partRef.current) {
        partRef.current.dispose();
      }
      if (pianoRef.current) {
        pianoRef.current.dispose();
      }
    };
  }, []);

  // Compose a new rhythm sequence
  const compose = useCallback(() => {
    const newCurrInfo: Array<{ type: 'rhythm' | 'barline'; html: string }> = [];
    let totalSecs = 0;
    const newRealAnswer: string[] = [];

    setUserAnswer({});
    setIsCorrect(false);
    setTooManyNotes(false);
    setShowInfo(false);

    // Clear existing part
    if (partRef.current) {
      partRef.current.clear();
    }

    // Do initial count off
    const spb = Tone.Time('4n').toSeconds();
    for (let i = 0; i < beatsPerBar; i++) {
      if (partRef.current) {
        partRef.current.add({
          time: totalSecs,
          pitch: 'C7',
          length: '4n',
        });
      }
      totalSecs += spb;
    }

    let pitchIdx = 7;
    let firstNote = true;

    for (let barIdx = 0; barIdx < totalBars; barIdx++) {
      let beatsLeft = beatsPerBar;

      while (beatsLeft > 0) {
        // Pick a random rhythm
        let rhythm = randRhythm();

        // Check the selected rhythm fits within the remainder of the bar
        while (rhythm.beats > beatsLeft) {
          rhythm = randRhythm();
        }

        newRealAnswer.push(rhythm.name);
        beatsLeft -= rhythm.beats;

        for (let i = 0; i < rhythm.durations.length; i++) {
          const length = rhythm.durations[i];
          const lastNote = beatsLeft === 0 && rhythm.durations.length - i === 1;

          // Want to start and end on Do, other notes can be random (if vary pitch is checked)
          if (firstNote || lastNote || !varyPitch) {
            pitchIdx = 7;
          } else {
            const prevIdx = pitchIdx;
            const ni = pitchIdx % 7;
            const row = transitionMatrix[ni];
            const rnd = randInt(0, 99);
            let newIdx = 0;
            let cumProb = row[0];

            while (cumProb < rnd && newIdx < 6) {
              newIdx++;
              cumProb += row[newIdx];
            }

            if (prevIdx > newIdx + 3.5) {
              newIdx += 7;
            }
            pitchIdx = newIdx;
          }

          const pitch = myNotes[pitchIdx];
          if (partRef.current) {
            partRef.current.add({
              time: totalSecs,
              pitch,
              length,
            });
          }
          totalSecs += Tone.Time(length).toSeconds();
          firstNote = false;
        }
        newCurrInfo.push({ type: 'rhythm', html: rhythm.html });
      }
      newCurrInfo.push({ type: 'barline', html: '|' });
    }

    setRealAnswer(newRealAnswer);
    setCurrInfo(newCurrInfo);
  }, [beatsPerBar, totalBars, varyPitch]);

  // Play the composed notes
  const playNotes = useCallback(async () => {
    await Tone.start();
    const tt = Tone.getTransport();
    tt.seconds = 0;
    tt.start(0);
    if (partRef.current) {
      partRef.current.start(0);
    }
  }, []);

  // Check if user's answer is correct
  const checkAnswer = useCallback(() => {
    setTooManyNotes(false);
    setIsCorrect(false);

    const userAnswerArray = Object.values(userAnswer);
    let ok = true;
    let userNoteCount = 0;

    for (let i = 0; i < userAnswerArray.length; i++) {
      if (i >= realAnswer.length || userAnswerArray[i] !== realAnswer[i]) {
        ok = false;
      }
      const r = findRhythm(userAnswerArray[i]);
      userNoteCount += r.durations.length;
    }

    if (ok && userAnswerArray.length > 0 && userAnswerArray.length === realAnswer.length) {
      setIsCorrect(true);
    } else {
      let realNoteCount = 0;
      for (let i = 0; i < realAnswer.length; i++) {
        const r = findRhythm(realAnswer[i]);
        realNoteCount += r.durations.length;
      }

      if (realNoteCount < userNoteCount) {
        setTooManyNotes(true);
      }
    }
  }, [userAnswer, realAnswer]);

  // Add rhythm to user's answer
  const addAnswer = useCallback((rhythmName: string) => {
    const ansId = `ans${nextAnsIdRef.current++}`;
    setUserAnswer((prev) => ({
      ...prev,
      [ansId]: rhythmName,
    }));
  }, []);

  // Delete rhythm from user's answer
  const deleteAnswer = useCallback((ansId: string) => {
    setUserAnswer((prev) => {
      const newAnswer = { ...prev };
      delete newAnswer[ansId];
      return newAnswer;
    });
  }, []);

  // Update BPM
  const handleBpmChange = useCallback((value: number) => {
    setBeatsPerMinute(value);
    Tone.getTransport().bpm.value = value;
  }, []);

  // Update Beats Per Bar
  const handleBpbChange = useCallback((value: number) => {
    setBeatsPerBar(value);
    Tone.getTransport().timeSignature = value;
  }, []);

  // Handle play new button
  const handlePlayNew = useCallback(() => {
    compose();
    playNotes();
  }, [compose, playNotes]);

  // Handle show button
  const handleShow = useCallback(() => {
    setShowInfo(true);
  }, []);

  // Check answer whenever user answer changes
  useEffect(() => {
    checkAnswer();
  }, [userAnswer, checkAnswer]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center">2ManyNotes</h1>

      <RhythmControls
        beatsPerMinute={beatsPerMinute}
        beatsPerBar={beatsPerBar}
        totalBars={totalBars}
        varyPitch={varyPitch}
        onPlayNew={handlePlayNew}
        onReplay={playNotes}
        onShow={handleShow}
        onBpmChange={handleBpmChange}
        onBpbChange={handleBpbChange}
        onBarsChange={setTotalBars}
        onVaryPitchChange={setVaryPitch}
      />

      {showInfo && currInfo.length > 0 && (
        <div className="mb-4 min-h-[70px] bg-white p-4 rounded border border-gray-300 flex flex-wrap items-center">
          {currInfo.map((item, index) => (
            <div key={index} className="inline-block">
              {item.type === 'barline' ? (
                <span className="text-[50px] px-2">|</span>
              ) : (
                <RhythmNotation html={item.html} />
              )}
            </div>
          ))}
        </div>
      )}

      <UserAnswerComponent
        userAnswer={userAnswer}
        isCorrect={isCorrect}
        tooManyNotes={tooManyNotes}
        onDeleteAnswer={deleteAnswer}
      />

      <RhythmPad onAddAnswer={addAnswer} />
    </div>
  );
}
