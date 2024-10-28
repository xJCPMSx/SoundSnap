// src/components/Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

const Navbar = ({ setSearchTerm }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>SoundSnap</h2>
        <input 
          type="text" 
          placeholder="Buscar sons..." 
          className="search-bar" 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
      </div>
      <div className="navbar-right">
        {/* 
        <a href="#home">Página Inicial</a>
        <a href="#new">Novos</a>
        <div className="dropdown" ref={dropdownRef}>
          <a href="#categories" className="dropdown-toggle" onClick={toggleDropdown}>
            Categorias
          </a>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li><a href="/pt/categories/anime%20&amp;%20manga/" className="dropdown-item">Anime &amp; Manga</a></li>
              <li><a href="/pt/categories/games/" className="dropdown-item">Games</a></li>
              <li><a href="/pt/categories/memes/" className="dropdown-item">Memes</a></li>
              <li><a href="/pt/categories/movies/" className="dropdown-item">Movies</a></li>
              <li><a href="/pt/categories/music/" className="dropdown-item">Music</a></li>
              <li><a href="/pt/categories/politics/" className="dropdown-item">Politics</a></li>
              <li><a href="/pt/categories/pranks/" className="dropdown-item">Pranks</a></li>
              <li><a href="/pt/categories/reactions/" className="dropdown-item">Reactions</a></li>
              <li><a href="/pt/categories/sound%20effects/" className="dropdown-item">Sound Effects</a></li>
              <li><a href="/pt/categories/sports/" className="dropdown-item">Sports</a></li>
              <li><a href="/pt/categories/television/" className="dropdown-item">Television</a></li>
              <li><a href="/pt/categories/tiktok%20trends/" className="dropdown-item">Tiktok Trends</a></li>
              <li><a href="/pt/categories/viral/" className="dropdown-item">Viral</a></li>
              <li><a href="/pt/categories/whatsapp%20audios/" className="dropdown-item">Whatsapp Audios</a></li>
            </ul>
          )}
        </div>
        <a href="#upload">Enviar</a>
        <a href="#login">Login</a> 
        */}
      </div>
    </nav>
  );
};

export default Navbar;
