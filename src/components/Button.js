import React from 'react';
import './Button.css';

const Button = ({ sound, onPlay }) => {
  return (
    <button className="button" onClick={() => onPlay(sound.url)}>
      {sound.label}
    </button>
  );
};

export default Button;
