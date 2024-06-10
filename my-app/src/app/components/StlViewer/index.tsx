"use client";

import React, { useEffect, useState } from 'react';
import { StlViewer } from 'react-stl-viewer';

const url = "https://raw.githubusercontent.com/p-medeiros/Chess-Rook-Stl/main/files/Rook.stl";

const style = {
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
};

const Stl = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return nothing on the server-side
  }

  return (
    <StlViewer
      style={style}
      orbitControls
      shadows
      url={url}
    />
  );
};

export default Stl;
