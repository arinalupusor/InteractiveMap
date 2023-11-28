import React, {useState} from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Events from './pages/Events';
import LeafletMap from './components/LeafletMap';
import AuthContext from './components/AuthContext';
import PinPage from './pages/PinPage';
import './pages/StyleSheets/App.css';
import './pages/StyleSheets/Register.css';
import './pages/StyleSheets/Login.css';
import CreateEvent from './pages/CreateEvent';
import ViewmyEvents from './pages/ViewmyEvents';
import './pages/StyleSheets/CreateEvent.css';
import './pages/StyleSheets/Viewmyevents.css';

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
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register/:type" element={<Register />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/pinPage/:pin_id" element={<PinPage />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/event" element={<Events />} />
                        <Route path="/event/:event_id" element={<Events />} />
                        <Route path="/map" element={<LeafletMap />} />
                        <Route path="/create-event" element={<CreateEvent />} />
                        <Route path="/view-my-events" element={<ViewmyEvents />} />
                    </Routes>
                    
                </BrowserRouter>
                
            </div>
            
        </AuthContext.Provider>
    );
}

export default App;