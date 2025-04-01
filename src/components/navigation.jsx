import { Link, useLocation } from "react-router-dom";
import "../styles/navigation.css";

function NavigationBar() {
  const location = useLocation(); // Get current URL path

  return (
    <div className="navbar">
      <div className="pagename">
        <h1>Lustin Luola</h1>
      </div>
      <Link to="/" className="nav-link">
        <button className={`nav-button ${location.pathname === "/" ? "active" : ""}`}>
          <h1>Home</h1>
        </button>
      </Link>
      <Link to="/portfolio" className="nav-link">
        <button className={`nav-button ${location.pathname === "/portfolio" ? "active" : ""}`}>
          <h1>Portfolio</h1>
        </button>
      </Link>
      <Link to="/about" className="nav-link">
        <button className={`nav-button ${location.pathname === "/about" ? "active" : ""}`}>
          <h1>About Me</h1>
        </button>
      </Link>
    </div>
  );
}

export default NavigationBar;
