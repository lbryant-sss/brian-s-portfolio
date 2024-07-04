import React from 'react';
import { useState } from 'react';

import './App.css';
import Navbar from './assets/components/NavBar'; // Ensure the path is correct
import Body from './assets/components/Body'; 
function App() {
  return (
    <>
      <Navbar />
      <Body />
    </>
  );
}

export default App;
