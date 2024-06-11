"use client"; // This directive is required to mark the component as a Client Component in Next.js

import React from 'react';
import './Header.css';
import LightDarkMode from '../LightDarkMode';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">MyApp</h1>
      <LightDarkMode />
    </header>
  );
};

export default Header;
