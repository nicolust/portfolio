import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navigation.css";

function NavigationBar() {
  const location = useLocation();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`navbar ${visible ? "navbar-show" : "navbar-hide"}`}>
      <div className="pagename">
        <h1>Lustin Luola</h1>
      </div>
      <Link to="/" className="nav-link">
        <button className={`nav-button ${location.pathname === "/" ? "active" : ""}`}>
          <h1>Home</h1>
        </button>
      </Link>
      <Link to="/works" className="nav-link">
        <button className={`nav-button ${location.pathname === "/works" ? "active" : ""}`}>
          <h1>Portfolio</h1>
        </button>
      </Link>
      <Link to="/about" className="nav-link">
        <button className={`nav-button ${location.pathname === "/about" ? "active" : ""}`}>
          <h1>About me</h1>
        </button>
      </Link>
    </div>
  );
}

export default NavigationBar;
