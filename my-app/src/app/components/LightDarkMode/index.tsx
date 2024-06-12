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
    <div className="app">
      <div className="body">
        <div className="phone">
          <div className="content">
            <div className="circle">
              <div className="crescent"></div>
            </div>
            <label htmlFor="switch">
              <input id="switch" type="checkbox" onChange={handleToggle} checked={isDarkMode} />
              <div className="toggle"></div>
              <div className="names">
                <p className="light">Light</p>
                <p className="dark">Dark</p>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightDarkMode;
