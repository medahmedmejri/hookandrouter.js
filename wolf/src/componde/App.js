import React, { useState } from 'react';
import Movylist from './Movylist.js';
import Filter from './Filter.js';
import './My.css';

function App() {
 

  return (
    <>
    <Filter/>
      <Movylist />
    </>
  );
}

export default App;


