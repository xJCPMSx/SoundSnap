// src/App.js
import React, { useState } from 'react';
import SoundBoard from './components/SoundBoard';
import Navbar from './components/Navbar'; // Importar o componente Navbar
import './App.css';

const initialSounds = [
  { label: 'Tchaaa', url: process.env.PUBLIC_URL + '/sound/tchaa.ogg', album: 'Diversos' },
  { label: 'Música dramática', url: process.env.PUBLIC_URL + '/sound/musica_dramatica.mp3', album: 'Diversos' },
  { label: 'Brilha 1', url: process.env.PUBLIC_URL + '/sound/brilha1.ogg', album: 'Marcela' },
  { label: 'Brilha 2', url: process.env.PUBLIC_URL + '/sound/brilha2.ogg', album: 'Marcela' },
  { label: 'Brilha 3', url: process.env.PUBLIC_URL + '/sound/brilha3.ogg', album: 'Marcela' },
  { label: 'AlejannnPIU', url: process.env.PUBLIC_URL + '/sound/alejannnPIU.ogg', album: 'Diversos' }
];

const buttonImages = [
  process.env.PUBLIC_URL + '/Buttons/Amarelo_Claro.png',
  process.env.PUBLIC_URL + '/Buttons/Amarelo_Escuro.png',
  process.env.PUBLIC_URL + '/Buttons/Azul_Bebe.png',
  process.env.PUBLIC_URL + '/Buttons/Azul_Claro.png',
  process.env.PUBLIC_URL + '/Buttons/Azul_Escuro.png',
  process.env.PUBLIC_URL + '/Buttons/Azul_Marinho.png',
  process.env.PUBLIC_URL + '/Buttons/Roxo_Claro.png',
  process.env.PUBLIC_URL + '/Buttons/Roxo_Escuro.png',
  process.env.PUBLIC_URL + '/Buttons/Rosa_Choque.png',
  process.env.PUBLIC_URL + '/Buttons/Rosa_Claro.png',
  process.env.PUBLIC_URL + '/Buttons/Carmin.png',
  process.env.PUBLIC_URL + '/Buttons/Laranja.png',
  process.env.PUBLIC_URL + '/Buttons/Verde_Claro.png',
  process.env.PUBLIC_URL + '/Buttons/Preto.png',
  process.env.PUBLIC_URL + '/Buttons/Vermelho.png',
];


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAlbum, setSelectedAlbum] = useState('Todos');
  const [selectedImages, setSelectedImages] = useState({});
  const [userSounds, setUserSounds] = useState(() => {
    const saved = localStorage.getItem('soundSnap_userSounds');
    return saved ? JSON.parse(saved) : [];
  });

  const allSounds = [...initialSounds, ...userSounds];

  const handleImageChange = (label, newImage) => {
    setSelectedImages((prev) => ({ ...prev, [label]: newImage }));
  };

  const handleAddSound = (newSound) => {
    const updatedUserSounds = [...userSounds, { ...newSound, id: Date.now() }];
    setUserSounds(updatedUserSounds);
    localStorage.setItem('soundSnap_userSounds', JSON.stringify(updatedUserSounds));
  };

  const handleDeleteSound = (id) => {
    const updatedUserSounds = userSounds.filter(s => s.id !== id);
    setUserSounds(updatedUserSounds);
    localStorage.setItem('soundSnap_userSounds', JSON.stringify(updatedUserSounds));
  };

  const albums = ['Todos', ...new Set(allSounds.map(s => s.album))];

  const filteredSounds = allSounds.filter(sound => {
    const matchesSearch = sound.label.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAlbum = selectedAlbum === 'Todos' || sound.album === selectedAlbum;
    return matchesSearch && matchesAlbum;
  });

  return (
    <div className="App">
      <Navbar 
        setSearchTerm={setSearchTerm} 
        albums={albums} 
        selectedAlbum={selectedAlbum} 
        setSelectedAlbum={setSelectedAlbum}
        onAddSound={handleAddSound}
      />
      <div className="soundboard-container">
        <SoundBoard 
          sounds={filteredSounds}
          selectedImages={selectedImages} 
          handleImageChange={handleImageChange} 
          buttonImages={buttonImages}
          onDeleteSound={handleDeleteSound}
        />
      </div>
    </div>
  );
}

export default App;
