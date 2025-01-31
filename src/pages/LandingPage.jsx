// src/pages/LandingPage.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>
            Simplifica la gestión de tu taller de reparación,{" "}
            <span className="highlight">lleva tu negocio al siguiente nivel.</span>
          </h1>
          <p className="subtext">Toma el control de tu negocio.</p>
          <div className="cta-buttons">
            <a href="/register" className="btn-primary">
              Comenzar gratis
            </a>
            <p className="trial-text">PRUEBA GRATIS DE 15 DÍAS</p>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Imagen de software"
            className="software-image"
          />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
