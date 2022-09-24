import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './page/Home';
import Menu from './page/Menu';
import About from './page/About';
import Contact from './page/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/menu" element={<Menu />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>

        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
