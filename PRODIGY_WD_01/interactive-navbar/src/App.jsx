
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '/src/Components/Navbar.jsx';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Service';
import Contact from './Pages/Contact';
import SignIn from './Pages/SignIn';
import './App.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/SignIn" element={<SignIn/>} />

    </Routes>
  </Router>
);

export default App;
