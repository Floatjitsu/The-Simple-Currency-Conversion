import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderBar from './components/HeaderBar';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
      <div className='App'>
        <HeaderBar/>
        <CurrencyConverter/>
      </div>
  );
}

export default App;
