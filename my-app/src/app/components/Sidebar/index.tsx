import React, { useState } from 'react';
import { FiHome, FiUser, FiSettings, FiMenu } from 'react-icons/fi';
import './Sidebar.css'; // Importa os estilos específicos do sidebar

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <h1 className={`sidebar-title ${isOpen ? 'visible' : 'hidden'}`}>MyApp</h1>
        <button className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          <FiMenu size={24} />
        </button>
      </div>
      <div className="sidebar-content">
        <nav className="nav-links">
          <a href="#" className="nav-link">
            <FiHome size={24} />
            <span className={`nav-text ${isOpen ? 'visible' : 'hidden'}`}>Home</span>
          </a>
          <a href="#" className="nav-link">
            <FiUser size={24} />
            <span className={`nav-text ${isOpen ? 'visible' : 'hidden'}`}>Profile</span>
          </a>
          <a href="#" className="nav-link">
            <FiSettings size={24} />
            <span className={`nav-text ${isOpen ? 'visible' : 'hidden'}`}>Settings</span>
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
