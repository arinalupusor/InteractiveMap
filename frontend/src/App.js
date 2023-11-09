import {Route, Routes, BrowserRouter} from 'react-router-dom';
import About  from "./pages/About"
import Home  from "./pages/Home"
import Login from "./pages/Login";
import Register from "./pages/Register";
import './App.css';
import "./Register.css";
import "./Login.css";
import Header from "./components/Header"; 

function App() {
  
  
 return (
    <div className="app">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        

        </Routes>
        {window.location.pathname==='/'&& <Header />}
      
      
      </BrowserRouter>
 
    </div>
     )
}

export default App;
