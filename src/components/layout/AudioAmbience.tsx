import React, { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export function AudioAmbience() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  const toggleSound = () => {
    if (isPlaying) {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.4);
        setTimeout(() => {
          oscillatorsRef.current.forEach((osc) => {
            try { osc.stop(); osc.disconnect(); } catch (e) {}
          });
          oscillatorsRef.current = [];
          setIsPlaying(false);
        }, 500);
      }
    } else {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0, ctx.currentTime);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        const frequencies = [146.83, 220.00, 261.63, 329.63];
        oscillatorsRef.current = [];

        frequencies.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
          const oscGain = ctx.createGain();

          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          osc.detune.setValueAtTime((idx - 1.5) * 4, ctx.currentTime);
          oscGain.gain.setValueAtTime(0.035 / (idx + 1), ctx.currentTime);

          if (panner) {
            panner.pan.setValueAtTime((idx - 1.5) * 0.4, ctx.currentTime);
            osc.connect(oscGain);
            oscGain.connect(panner);
            panner.connect(masterGain);
          } else {
            osc.connect(oscGain);
            oscGain.connect(masterGain);
          }

          osc.start();
          oscillatorsRef.current.push(osc);
        });

        masterGain.gain.setTargetAtTime(0.1, ctx.currentTime, 0.8);
        setIsPlaying(true);
      } catch (err) {
        console.warn('Web Audio ambience could not be initialized:', err);
      }
    }
  };

  return (
    <button
      onClick={toggleSound}
      data-cursor="SOUND"
      className="group flex items-center space-x-2 text-[11px] font-mono tracking-widest uppercase text-[#432B3E] hover:text-[#22031F] transition-colors py-1.5 px-3 rounded-full border border-[rgba(34,3,31,0.1)] hover:border-[#87B38D] bg-white shadow-sm"
      title={isPlaying ? "Mute Ambient Experience" : "Enable Ambient Experience"}
      aria-label={isPlaying ? "Mute Ambient Sound" : "Play Ambient Sound"}
    >
      {isPlaying ? (
        <>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#87B38D] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#87B38D]"></span>
          </span>
          <span className="hidden sm:inline font-medium text-[#22031F]">MUTE</span>
          <Volume2 className="w-3.5 h-3.5 text-[#87B38D]" />
        </>
      ) : (
        <>
          <span className="w-2 h-2 rounded-full bg-[#87B38D]/40"></span>
          <span className="hidden sm:inline">SOUND</span>
          <VolumeX className="w-3.5 h-3.5 text-[#6E5668] group-hover:text-[#22031F]" />
        </>
      )}
    </button>
  );
}
