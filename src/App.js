import React from 'react';
import SoundBoard from './components/SoundBoard';
import './App.css';

const sounds = [
  { label: 'Som 1', url: process.env.PUBLIC_URL + '/sound/tchaa.mp3' },
  { label: 'Som 2', url: process.env.PUBLIC_URL + '/sound/musica_dramatica.mp3' },
  /*{ label: 'Som 3', url: 'url-do-som-3.mp3' },
  { label: 'Som 4', url: 'url-do-som-4.mp3' },
  { label: 'Som 5', url: 'url-do-som-5.mp3' },
  { label: 'Som 6', url: 'url-do-som-6.mp3' },*/
];

function App() {
  return (
    <div className="App">
      <h1>SoundSnap</h1>
      <div className="soundboard">
        <SoundBoard sounds={sounds} />
      </div>
    </div>
  );
}

export default App;
