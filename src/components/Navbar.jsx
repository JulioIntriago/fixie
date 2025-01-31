import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo de la marca */}
      <a href="/" className="brand">Fixie</a>

      {/* Botón hamburguesa */}
      <button
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>

      {/* Enlaces de navegación */}
      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <a href="#features">Características</a>
        <a href="#pricing">Precios</a>
        <a href="/login" className="login-link">Iniciar sesión</a>
        <a href="/register" className="register-btn">Regístrate</a>
      </div>
    </nav>
  );
};

export default Navbar;
