import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar-main">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand">
          WePrint
        </Link>
        <button className="navbar-toggle" onClick={toggleNavbar}>
          ☰
        </button>
        <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>
            Products
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          <Link
            to="/login"
            className="navbar-login"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
