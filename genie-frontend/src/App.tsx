import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const popup = () => {
      window.open('https://genie-frontend.storage.googleapis.com/index.html?reload=1111');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={popup}>Open popup</button>

      </header>
    </div>
  );
}

export default App;
