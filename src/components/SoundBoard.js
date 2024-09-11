import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import Button from './Button';
import './SoundBoard.css'; // Importa o CSS específico para o SoundBoard, se necessário

const SoundBoard = ({ sounds }) => {
  const [playing, setPlaying] = useState(null);
  const playerRef = useRef(null);

  const handlePlay = (url) => {
    if (playerRef.current) {
      playerRef.current.seekTo(0); // Reset playback to start
      playerRef.current.getInternalPlayer().pause(); // Pause if already playing
    }
    setPlaying(url);
  };

  return (
    <div className="soundboard">
      {sounds.map((sound, index) => (
        <Button key={index} sound={sound} onPlay={handlePlay} />
      ))}
      {playing && (
        <ReactPlayer
          ref={playerRef}
          url={playing}
          playing={true}
          width="0px" // Set width and height to 0 if you don't want to display the player
          height="0px"
          controls={false} // Optionally hide controls if you don't need them
        />
      )}
    </div>
  );
};

export default SoundBoard;
