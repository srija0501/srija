import "./footer.css";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, LinkedIn, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Navigation Links */}
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <Link to="/" className="nav-link px-2 text-muted">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/places" className="nav-link px-2 text-muted">
            Places
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/pricing" className="nav-link px-2 text-muted">
            Pricing
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/faqs" className="nav-link px-2 text-muted">
            FAQs
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link px-2 text-muted">
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Social Media Icons */}
      <div className="social-icons text-center mb-3">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter className="icon" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className="icon" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <LinkedIn className="icon" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <YouTube className="icon" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-center company-name text-muted">
        &copy; 2024 HotelBooking, Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
