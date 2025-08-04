import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Detection from './pages/Detection';
import About from './pages/About';
import useLanguageSetup from './hooks/useLanguageSetup';
import './App.css';
import './i18n';

function App() {
  useLanguageSetup();

  return (
    <div className="App min-h-screen bg-gray-900 text-white">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detection" element={<Detection />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;