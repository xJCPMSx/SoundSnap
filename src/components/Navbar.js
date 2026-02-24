import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ setSearchTerm, albums, selectedAlbum, setSelectedAlbum, onAddSound }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newSound, setNewSound] = useState({ label: '', url: '', album: 'Diversos' });

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (newSound.label && newSound.url) {
      onAddSound(newSound);
      setNewSound({ label: '', url: '', album: 'Diversos' });
      setShowAddModal(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>SoundSnap</h2>
        <div className="nav-controls">
          <input
            type="text"
            placeholder="Buscar sons..."
            className="search-bar"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="album-select"
            value={selectedAlbum}
            onChange={(e) => setSelectedAlbum(e.target.value)}
          >
            {albums.map(album => (
              <option key={album} value={album}>{album}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="navbar-right">
        <button className="add-btn" onClick={() => setShowAddModal(true)}>+ Add Som</button>
      </div>

      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Adicionar Novo Som</h3>
            <form onSubmit={handleAddSubmit}>
              <input
                type="text"
                placeholder="Nome do som"
                value={newSound.label}
                onChange={(e) => setNewSound({ ...newSound, label: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="URL do som (ogg/mp3/wav)"
                value={newSound.url}
                onChange={(e) => setNewSound({ ...newSound, url: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Álbum"
                value={newSound.album}
                onChange={(e) => setNewSound({ ...newSound, album: e.target.value })}
              />
              <div className="modal-actions">
                <button type="submit">Salvar</button>
                <button type="button" onClick={() => setShowAddModal(false)}>Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
