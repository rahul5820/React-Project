// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "/src/Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <ul className="nav-links">
        <div className="logo-Nav">
          <img src="./src/Images/gnm_next-removebg-preview.png" />
        </div>
        <div className="centered">
          
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </div>

        <li>
          <Link to="/SignIn">SignIn</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
