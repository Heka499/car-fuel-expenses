import React from 'react';
import { Header } from './components/header';
import { Consumption } from './components/consumption'
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
          <Consumption />
          <TransactionList />
          <AddTransaction />
      </div>
    </div>
  );
}

export default App;
