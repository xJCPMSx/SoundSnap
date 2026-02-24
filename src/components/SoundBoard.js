import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const SoundBoard = ({ sounds, buttonImages, onDeleteSound }) => {
  const audioRefs = useRef(Array(sounds.length).fill(null)); // Armazenar referências aos áudios

  return (
    <div className="soundboard">
      {sounds.map((sound) => (
        <div key={sound.id || sound.label} className="sound-button">
          <h3>{sound.label}</h3>
          <span className="album-badge">{sound.album}</span>
          <button onClick={() => handlePlay(sound.url, (sound.id || sound.label))} className="play-btn">
            <img src={buttonImages[0]} alt={sound.label} />
          </button>

          <div className="button-controls">
            {sound.id && (
              <button
                className="delete-btn"
                onClick={() => onDeleteSound(sound.id)}
                title="Excluir som"
              >
                🗑️
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

SoundBoard.propTypes = {
  sounds: PropTypes.array.isRequired,
  buttonImages: PropTypes.array.isRequired,
};

export default SoundBoard;
