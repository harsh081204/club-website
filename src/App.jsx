import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Upevent from './pages/Upevent';
import './App.css';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Upevent" element={<Upevent />} />
      </Routes>
      <Analytics />
    </div>
  );
}

export default App;
