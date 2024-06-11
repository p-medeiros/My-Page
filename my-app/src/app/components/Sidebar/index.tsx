// File: \Github\My-Page\my-app\src\app\components\Sidebar\index.tsx
"use client";

import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaCube, FaRobot } from 'react-icons/fa';
import { GrCpu } from "react-icons/gr";
import './Sidebar.css'; // Importa os estilos específicos do sidebar
import Link from 'next/link';

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
          <Link href="/views/ai" className="nav-link">
            <GiArtificialIntelligence size={24} />
            <span className={`nav-text ${isOpen ? 'visible' : 'hidden'}`}>AI</span>
          </Link>
          <Link href="/views/bots" className="nav-link">
            <FaRobot size={24} />
            <span className={`nav-text ${isOpen ? 'visible' : 'hidden'}`}>Bots</span>
          </Link>
          <Link href="/views/fpga" className="nav-link">
            <GrCpu size={24} />
            <span className={`nav-text ${isOpen ? 'visible' : 'hidden'}`}>FPGA</span>
          </Link>
          <Link href="/views/stlModels" className="nav-link">
            <FaCube size={24} />
            <span className={`nav-text ${isOpen ? 'visible' : 'hidden'}`}>3D Models</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
