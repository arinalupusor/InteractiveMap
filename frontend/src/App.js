import {Route, Routes, BrowserRouter} from 'react-router-dom';
import About  from "./pages/About"
import Home  from "./pages/Home"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Event from "./pages/Event";
import "./Register.css";
import "./Login.css";
import './App.css';

function App() {
 return (
    <div className="app">
      <BrowserRouter>
        
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/event" element={<Event/>} />
        </Routes>
      
 </BrowserRouter>
    </div>
    
     )
}

export default App;