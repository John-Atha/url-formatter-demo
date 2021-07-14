import './App.css';
import React, { useState } from 'react';
import MyNavbar from './MyNavbar';
import Home from './Home';
import About from './About';

function App() {

  const [page, setPage] = useState('home');

  return (
    <div className="App">

      <MyNavbar change={setPage} />

      { page==='home' && <Home /> }

      { page==='about' && <About /> }

    </div>
  );
}

export default App;
