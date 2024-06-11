"use client"; // This directive is required to mark the component as a Client Component in Next.js

import React, { useState } from 'react';
import './LightDarkMode.css';

const LightDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <div className="mode-switch-container">
      <input id="switch" type="checkbox" checked={isDarkMode} onChange={handleToggle} />
      <label htmlFor="switch" className="switch-label">
        <div className="toggle"></div>
        <div className="names">
          <p className="light">Light</p>
          <p className="dark">Dark</p>
        </div>
      </label>
      <div className="circle">
        <div className="crescent"></div>
      </div>
    </div>
  );
};

export default LightDarkMode;
