'use client';

import React, { useState, useEffect, useRef } from 'react';

const playlist = [
  { title: "Bohemian Rhapsody — Queen", duration: 354 },
  { title: "Hotel California — Eagles", duration: 391 },
  { title: "Stairway to Heaven — Led Zeppelin", duration: 482 },
];

export default function AudioPlayer() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const marqueeRef = useRef(null);
  const requestRef = useRef();
  const xPosRef = useRef(0);

  // Marquee Animation Logic
  const animate = () => {
    if (marqueeRef.current) {
      const parentWidth = marqueeRef.current.parentElement.offsetWidth;
      const trackWidth = marqueeRef.current.offsetWidth;
      
      xPosRef.current -= 0.6;
      if (xPosRef.current < -trackWidth) {
        xPosRef.current = parentWidth;
      }
      marqueeRef.current.style.transform = `translateX(${xPosRef.current}px)`;
    }
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  // Playback Logic (Simulated Ticker)
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setElapsed((prev) => {
          if (prev >= playlist[current].duration) {
            handleNext();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, current]);

  const fmt = (s) => {
    const mins = Math.floor(s / 60);
    const secs = String(Math.floor(s % 60)).padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % playlist.length);
    setElapsed(0);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + playlist.length) % playlist.length);
    setElapsed(0);
  };

  const handleStop = () => {
    setIsPlaying(false);
    setElapsed(0);
  };

  const handleProgressClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    setElapsed(Math.round(pct * playlist[current].duration));
  };

  const progressPct = (elapsed / playlist[current].duration) * 100;

  return (
    <div className="w-full max-w-sm overflow-hidden bg-white border rounded-lg select-none border-neutral-300 dark:bg-neutral-900 dark:border-neutral-700 font-mono">
      {/* Row 1: Controls + Marquee */}
      <div className="flex items-center h-9 border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex h-full border-r border-neutral-200 dark:border-neutral-800">
          <button onClick={handlePrev} className="w-8 h-full flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 border-r border-neutral-200 dark:border-neutral-800">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><polygon points="11,2 5,6 11,10"/><rect x="1" y="2" width="2" height="8"/></svg>
          </button>
          <button onClick={() => setIsPlaying(!isPlaying)} className="w-8 h-full flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 border-r border-neutral-200 dark:border-neutral-800">
            {isPlaying ? (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><rect x="2" y="1" width="3" height="10"/><rect x="7" y="1" width="3" height="10"/></svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><polygon points="2,1 11,6 2,11"/></svg>
            )}
          </button>
          <button onClick={handleStop} className="w-8 h-full flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor"><rect x="1" y="1" width="8" height="8" rx="1"/></svg>
          </button>
          <button onClick={handleNext} className="w-8 h-full flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 border-l border-neutral-200 dark:border-neutral-800">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><polygon points="1,2 7,6 1,10"/><rect x="9" y="2" width="2" height="8"/></svg>
          </button>
        </div>
        
        <div className="flex-1 overflow-hidden h-full flex items-center relative">
          <div ref={marqueeRef} className="whitespace-nowrap text-[11px] text-neutral-600 dark:text-neutral-400 absolute">
            {playlist[current].title} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </div>

      {/* Row 2: Progress */}
      <div className="flex items-center h-7 px-2 gap-2">
        <div 
          className="flex-1 h-1 bg-neutral-200 dark:bg-neutral-800 rounded-full cursor-pointer relative"
          onClick={handleProgressClick}
        >
          <div 
            className="h-full bg-neutral-500 dark:bg-neutral-400 rounded-full transition-all duration-300" 
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <span className="text-[10px] text-neutral-400 dark:text-neutral-600 whitespace-nowrap">
          {fmt(elapsed)} / {fmt(playlist[current].duration)}
        </span>
      </div>
    </div>
  );
}