// src/App.js
import React, { useState } from 'react';
import SoundBoard from './components/SoundBoard';
import Navbar from './components/Navbar'; // Importar o componente Navbar
import './App.css';

const sounds = [
  { label: 'Tchaaa', url: process.env.PUBLIC_URL + '/sound/tchaa.ogg' },
  { label: 'Música dramática', url: process.env.PUBLIC_URL + '/sound/musica_dramatica.mp3' },
  { label: 'Brilha 1', url: process.env.PUBLIC_URL + '/sound/brilha1.ogg' },
  { label: 'Brilha 2', url: process.env.PUBLIC_URL + '/sound/brilha2.ogg' },
  { label: 'Brilha 3', url: process.env.PUBLIC_URL + '/sound/brilha3.ogg' },
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
  const [searchTerm, setSearchTerm] = useState(''); // Estado para armazenar o termo de busca
  const [selectedImages, setSelectedImages] = useState({}); // Estado para armazenar as imagens selecionadas

  const handleImageChange = (label, newImage) => {
    setSelectedImages((prev) => ({ ...prev, [label]: newImage }));
  };

  // Filtra os sons com base no termo de busca
  const filteredSounds = sounds.filter(sound =>
    sound.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Navbar setSearchTerm={setSearchTerm} /> {/* Passando setSearchTerm para Navbar */}
      <div className="soundboard">
        <SoundBoard 
          sounds={filteredSounds} // Passando os sons filtrados
          selectedImages={selectedImages} 
          handleImageChange={handleImageChange} 
          buttonImages={buttonImages}
        />
      </div>
    </div>
  );
}

export default App;
