import React from 'react';
import './App.css';
import Home from './components/Home';
import MyWork from './components/MyWork';
import Navbar from './components/Navbar';
import Skills from './components/Skills';


const App = () => {
  return (
    <div className="App">
      <Home />
      <MyWork />
      <Skills />
      <Navbar />
    </div>
  );
}

export default App;
