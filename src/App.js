import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import CurrencyConverter from './components/CurrencyConverter';
import HeaderBar from './components/HeaderBar';
import AboutComponent from './components/AboutComponent';
import CurrencyComparator from './components/CurrencyComparator';
import CurrenciesComponent from './components/Currencies';

function App() {
  return (
      <Router>
          <HeaderBar />
          <div className='App'>
            <Route exact path='/' component={CurrencyConverter} />
            <Route exact path='/comparator' component={CurrencyComparator} />
            <Route path ='/about' component={AboutComponent} />
            <Route path ='/currencies' component={CurrenciesComponent} />
          </div>
      </Router>
  );
}

export default App;
