import {Route, Routes, BrowserRouter} from 'react-router-dom';
import About  from "./pages/About"
import Home  from "./pages/Home"
import Login from "./pages/Login";
import Register from "./pages/Register";
import './App.css';
import "./Register.css";
import "./Login.css";

function App() {
  
  
 return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        

        </Routes>
        
      
      </BrowserRouter>
 
    </div>
     )
}

export default App;
