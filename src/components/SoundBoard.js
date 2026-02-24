import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const SoundBoard = ({ sounds, buttonImages, onDeleteSound, selectedImages, handleImageChange }) => {
  const audioRefs = useRef(Array(sounds.length).fill(null)); // Armazenar referências aos áudios

  const handlePlay = (url, index) => {
    // Pausar o áudio se já estiver tocando
    if (audioRefs.current[index] && !audioRefs.current[index].paused) {
      audioRefs.current[index].pause();
      audioRefs.current[index].currentTime = 0; // Reiniciar o áudio
    } else {
      // Criar um novo áudio se não houver um ou se o anterior estiver pausado
      audioRefs.current[index] = new Audio(url);
      audioRefs.current[index].play();
    }
  };

  return (
    <div className="soundboard">
      {sounds.map((sound, index) => (
        <div key={sound.id || sound.label} className="sound-button">
          <h4>{sound.label}</h4>
          <span className="album-badge">{sound.album}</span>
          <button onClick={() => handlePlay(sound.url, index)} className="play-btn">
            <img
              src={selectedImages[sound.label] || buttonImages[0]}
              alt={sound.label}
            />
          </button>

          <div className="button-controls">
            <select
              className="image-select"
              value={selectedImages[sound.label] || buttonImages[0]}
              onChange={(e) => handleImageChange(sound.label, e.target.value)}
            >
              {buttonImages.map((image, imgIndex) => (
                <option key={imgIndex} value={image}>
                  {image.split('/Buttons/')[1].replace(/_/g, ' ').replace('.png', '')}
                </option>
              ))}
            </select>
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
  onDeleteSound: PropTypes.func.isRequired,
  selectedImages: PropTypes.object.isRequired,
  handleImageChange: PropTypes.func.isRequired,
};

export default SoundBoard;
