import React, { useState, useRef, useEffect } from 'react';

interface Song {
  title: string;
  src: string;
  img: string;
}

const playlist: Song[] = [
  { title: "Lavender Mist", src: "../music/liminal-spaces.mp3", img: "/images/lavender.jpg" },
  { title: "Wildwood Bloom", src: "../music/liminal-spaces-2.mp3", img: "/images/wildwood.jpg" },
  { title: "Petal Rain", src: "/music/track3.mp3", img: "/images/petals.jpg" }
];

const WavAngel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSong = playlist[currentIndex];

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch(err => console.log("Playback blocked:", err));
    }
  }, [currentIndex, isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Playback blocked:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextSong = () => {
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
  };

  const prevSong = () => {
    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  return (
    <div className="player">
      <div className="player-display">
        <img src={currentSong.img} alt={currentSong.title} className="player-art" />
        <h3>{currentSong.title}</h3>
      </div>

      <audio 
        ref={audioRef} 
        src={currentSong.src} 
        onEnded={nextSong} 
      />

      <div className="player-controls">
        <button onClick={prevSong}>Prev</button>
        <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={nextSong}>Next</button>
      </div>
    </div>
  );
};

export default WavAngel;