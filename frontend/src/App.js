import {Route, Routes, BrowserRouter} from 'react-router-dom';
import About  from "./pages/About"
import Home  from "./pages/Home"
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import './App.css';
import "./Register.css";
import "./Login.css";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './path-to-reducer/reducer';
import myMiddleware from './path-to-middleware/middleware';

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}


export default App;