import type React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <header className="header">
        <img
          src="public/images/images_header/strasgite_logo.jpg"
          id="logo"
          alt="Logo"
        />
        <nav className="navbar">
          <a href="#rooms" className="navbar-link">
            Nos chambres
          </a>
          <a href="#reservations" className="navbar-link">
            Mes réservations
          </a>
          <a href="#contact" className="navbar-link">
            Contact
          </a>
          <button className="navbar-btn" type="button">
            Se connecter
          </button>
        </nav>
      </header>
      <div className="chateau">
        <img
          src="public/images/images_header/chateau.jpeg"
          alt="Château"
          className="chateau-image"
        />
        <h1 className="StraGite">StraGite</h1>
        <p className="chateau-text">
          Séjournez au cœur de Strasbourg, à quelques pas du Parlement Européen,
          et profitez de nos chambres d’hôtes confortables et accueillantes,
          idéales pour vos déplacements professionnels. Un lieu de détente et de
          convivialité, pensé pour vos besoins.
        </p>
      </div>
    </div>
  );
};

export default Header;
