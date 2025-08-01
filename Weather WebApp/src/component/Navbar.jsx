
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">WeatherCast</div>
      <ul className="nav-links">
        <li className="nav-item">
          <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">Contact</a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">LogIn</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
