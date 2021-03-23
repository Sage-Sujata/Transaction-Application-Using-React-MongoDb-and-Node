
import './App.css';
import Transaction from './Components/TransactionForm';
import Passbook from './Components/PassbookDetails';
import React, {Component} from 'react';

function App() {
  return (
    <div className="App">
    <Transaction/>
    <Passbook/>
    </div>
  );
}

export default App;
