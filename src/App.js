import React from 'react';
import './App.scss';

import { Routes, Route } from 'react-router-dom';

import Nav from './components/nav/nav.jsx';
import Footer from './components/footer/footer.jsx';

import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Products from './pages/products.jsx';
import Services from './pages/services.jsx';


function App() {
  return (
    <div className="App">
      <Nav/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
 