"use client";

import React, { useEffect, useState } from 'react';
import { StlViewer } from 'react-stl-viewer';

const url = "https://raw.githubusercontent.com/p-medeiros/Nema17-Enclosure-Suport-Stl-Run_out_sensor/main/Nema17%20Enclosure%20Suport%20%2B%20Run_out_sensor%20-%206330865/files/Nema17_Enclosure_Suport_%2B_Run_out_sensor.stl";

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
      floorProps={{ 
        gridWidth: 200, 
        gridLength: 200, 
      }}
      modelProps={{
        positionX : 100,
        positionY : 100,

      }}
      url={url}
    />
  );
};

export default Stl;
