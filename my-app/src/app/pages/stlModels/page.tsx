"use client";

import React from 'react';
import dynamic from 'next/dynamic';

const DynamicStl = dynamic(() => import('@/app/components/StlViewer'), { ssr: false });

const ModelsPage = () => {
  return (
    <div>
      <h1>3D Models Page</h1>
      <p>Welcome to the 3D Models page!</p>
      <div id="root">
          <DynamicStl />
        </div>
    </div>
  );
};

export default ModelsPage;