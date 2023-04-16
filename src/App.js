import React from 'react';
import { Header } from './components/header';
import { Consumption } from './components/consumption'

import './App.css';

function App() {
  return (
    <div className="App">
      <p>
        <Header />
        <div className="container">
            <Consumption />
            
        </div>
      </p>
    </div>
  );
}

export default App;
