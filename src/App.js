import React from 'react';
import Profile from './Containers/Profile';
import SpartanImage from './Components/SpartanImage';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <SpartanImage/>
        <Profile />
      </header>
    </div>
    </>
  );
}

export default App;
