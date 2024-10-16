import React, { useRef } from 'react';

const MusicButton = () => {
  const audioRef = useRef(null); // Create a ref for the audio element

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play(); // Play the audio when button is clicked
    }
  };

  return (
    <div>
      <img
        className='w-10 p-2  border border-slate-800 rounded-full dark:bg-white hover:cursor-pointer'
        src="/images/musical.png"
        alt="music"
        onClick={playMusic}
      />
      {/* Audio element to play music */}
      <audio ref={audioRef} src="/audio/song.mp3" /> {/* Adjust path as necessary */}
    </div>
  );
};

export default MusicButton;
