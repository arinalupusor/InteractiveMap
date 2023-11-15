import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LeafletMap from './components/LeafletMap';
import PinPage from './pages/PinPage';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import './Register.css';
import './Login.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/pinPage" element={<PinPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<LeafletMap />} /> {/* Noua rută pentru LeafletMap */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
