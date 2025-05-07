import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {/* Footer Column 1 */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">About Us</h5>
            <p className="footer-text">
              At PrintX, we deliver high-quality printing solutions with fast
              turnaround and top-tier customer service.
            </p>
          </div>

          {/* Footer Column 2 */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="footer-link">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Footer Column 3 */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="footer-link">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} PrintX. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
