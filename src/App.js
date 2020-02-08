import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home';
import Sidebar from './components/Sidebar'


function App() {
  return (
    <div className="App">
      <HomePage />
      <Sidebar />
    </div>
  );
}

export default App;
