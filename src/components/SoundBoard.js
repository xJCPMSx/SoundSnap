import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

const SoundBoard = ({ sounds, buttonImages }) => {
  const [buttonColors, setButtonColors] = useState(Array(sounds.length).fill(buttonImages[0]));
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

  const handleColorChange = (index, event) => {
    setButtonColors((prev) => {
      const newColors = [...prev];
      newColors[index] = event.target.value;
      return newColors;
    });
  };

  return (
    <div className="soundboard">
      {sounds.map((sound, index) => (
        <div key={index} className="sound-button">
          <h3>{sound.label}</h3>
          <button onClick={() => handlePlay(sound.url, index)} style={{ backgroundColor: 'white', border: 'none' }}>
            <img src={buttonColors[index]} alt={sound.label} style={{ width: '100px', height: '100px' }} />
          </button>
          <label style={{ marginTop: '10px' }}>Cor do botão</label>
          <select
            onChange={(e) => handleColorChange(index, e)}
            style={{ marginTop: '5px' }}
          >
            {buttonImages.map((image, imgIndex) => (
              <option key={imgIndex} value={image}>
                {image.split('/Buttons/')[1].replace(/_/g, ' ').replace('.png', '')}
              </option>
            ))}
          </select>
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
