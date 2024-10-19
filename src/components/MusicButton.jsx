import React, { useRef, useState } from 'react';

const MusicButton = () => {
  const audioRef = useRef(null); // Create a ref for the audio element
  const [isPlaying, setIsPlaying] = useState(false)

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
      }
    } 
  }

  return (
    <div>
      <img
        className='w-10 p-2  border border-slate-800 rounded-full dark:bg-white hover:cursor-pointer'
        src={isPlaying ? 'images/nomusic.png' : '/images/musical.png'}
        alt="music"
        onClick={toggleMusic}
      />
      {/* Audio element to play music */}
      <audio ref={audioRef} src="/audio/music.mp3" /> {/* Adjust path as necessary */}
    </div>
  );
};

export default MusicButton;
