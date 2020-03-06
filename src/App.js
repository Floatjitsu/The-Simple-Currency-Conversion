import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import CurrencyConverter from './components/CurrencyConverter';
import HeaderBar from './components/HeaderBar';
import AboutComponent from './components/AboutComponent';
import CurrencyComparison from './components/CurrencyComparison';

function App() {
  return (
      <Router>
          <HeaderBar />
          <div className='App'>
            <Route exact path='/' component={CurrencyConverter} />
            <Route exact path='/comparison' component={CurrencyComparison} />
            <Route path ='/about' component={AboutComponent} />
          </div>
      </Router>
  );
}

export default App;
