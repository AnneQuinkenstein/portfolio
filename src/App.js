import React from 'react';
import './App.css';
import Home from './components/Home';
import MyWork from './components/MyWork';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div className="App">
      <Home />
      <MyWork />
      <Navbar />
    </div>
  );
}

export default App;
