'use client';
import { useState } from 'react';
import { PLAYLIST } from '../constants/songs'; // Import your list

export default function WavAngel() {
  
  // Define your existing logic here
  const playSong = () => { console.log("Play triggered"); };
  const pauseSong = () => { console.log("Pause triggered"); };
  const nextSong = () => { console.log("Next triggered"); };
  const shuffleSong = () => { console.log("Shuffle triggered"); };
  const loopSong = () => { console.log("Loop toggled"); };

  return (
    <div className="box-outer">
      <div className="box">
        <div className="box-content-grid">
          
          <div className="s1-marquee">
            <button className="panel-target">
              <div className="panel-icon"></div>
            </button>
          </div>

          <div className="s2-time">
            <button className="panel-target">
              <div className="panel-icon"></div>
            </button>
          </div>

          <div className="s3-progress">
            <button className="panel-target">
              <div className="panel-icon"></div>
            </button>
          </div>

          <div className="s4-buttons">
            <button 
              className="button-target" 
              id="shuffle-btn" 
              onClick={shuffleSong}
            >
              <div className="button-icon">l</div>
            </button>
            
            <button 
              className="button-target" 
              id="play-btn" 
              onClick={playSong}
            >
              <div className="button-icon">pl</div>
            </button>

            <button 
              className="button-target" 
              id="pause-btn" 
              onClick={pauseSong}
            >
              <div className="button-icon">pa</div>
            </button>

            <button 
              className="button-target" 
              id="next-btn" 
              onClick={nextSong}
            >
              <div className="button-icon">r</div>
            </button>
          </div>

          <div className="s5-controls">
            <button 
              className="control-target" 
              id="loop-btn" 
              onClick={loopSong}
            >
              <div className="button-icon"></div>
            </button>
            <button className="control-target">
              <div className="button-icon"></div>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}