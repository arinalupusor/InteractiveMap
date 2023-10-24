import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  About  from "./components/About"
import Home  from "./components/Home"
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/login" element={LoginComponent} />
      <Route path="/register" element={RegisterComponent} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Switch>
  </BrowserRouter>
  )
}
      
export default App





