import logo from './logo.svg';
import Home from "./components/Home/Home";
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import {BrowserRouter , Routes , Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
    
      <h1>Hello World</h1>
      <BrowserRouter>
      <Routes>
        <Route exact path="/"element={<Home/>} />
        <Route exact path="/"element={<About/>} />
        <Route exact path="/"element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
