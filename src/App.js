import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Rightbar from './components/Rightbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="d-flex flex-row">
      <Sidebar />
        <Home />
        <Rightbar/>
      </div>
    </div>
  );
}

export default App;
