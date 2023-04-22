import React from 'react';
import Header from './components/Header';
import RefuelingForm from './components/RefuelingForm';
import RefuelingHistory from './components/RefuelingHistory';
import TotalCost from './components/TotalCost';

import './App.css';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <div>
      <Header />
      <div className='container'>
        <RefuelingForm />
        <TotalCost />
        <RefuelingHistory />
      </div>
    </div>
    </GlobalProvider>
  );
}

export default App;
