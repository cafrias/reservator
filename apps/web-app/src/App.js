import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import Navigation from './components/Navigation/Navigation';
import SearchForm from './components/SearchForm/SearchForm';

function App() {
  return (
    <div className="App">
      <div>
        <Navigation></Navigation>
      </div>
      <div>
        <SearchForm>a</SearchForm>
      </div>
    </div>
  );
}

export default App;
