import React from 'react';
import { Header } from './components/header';
import { Consumption } from './components/consumption'
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import './App.css';

function App() {
  return (
    <div className="App">
      <p>
        <Header />
        <div className="container">
            <Consumption />
            <TransactionList />
            <AddTransaction />
        </div>
      </p>
    </div>
  );
}

export default App;
