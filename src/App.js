import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <div className="container my-3">
      <Routes>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
