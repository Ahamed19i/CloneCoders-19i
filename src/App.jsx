import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MonParcours from './pages/MonParcours';
import Blog from './pages/Blog';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        {/* Barre de navigation */}
        <Navbar />
        
        {/* Définition des routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/monparcours" element={<MonParcours />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
