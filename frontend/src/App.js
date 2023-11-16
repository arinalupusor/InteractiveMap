import React, {useState} from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Event from './pages/Event';
import LeafletMap from './components/LeafletMap';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthContext from './components/AuthContext';
import './App.css';
import './Register.css';
import './Login.css';

function App() {
    const [email, setEmail] = useState(() => {
        let email = localStorage.getItem("email")
        if (!email)
            return null
        return email
    });

    const [accountType, setAccountType] = useState(() => {
        let accountType = localStorage.getItem("accountType")
        if (!accountType)
            return null
        return accountType
    });

    const [token, setToken] = useState(() => {
        let token = localStorage.getItem("token")
        if (!token)
            return null
        return token
    });

    const [isAuthenticated, setIsAuthenticated] = useState(!!(localStorage.getItem("token")));

    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, email, setEmail, token, setToken, accountType, setAccountType}}>
            <div className="app">
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/event" element={<Event />} />
                        <Route path="/map" element={<LeafletMap />} /> {/* Noua rută pentru LeafletMap */}
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
