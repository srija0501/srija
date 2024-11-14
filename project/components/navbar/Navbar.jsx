import React, { useContext, useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "./navbar.scss"; // Import the correct CSS

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [navbar, setNavbar] = useState(false);

  const notify = () => {
    toast.success("Logged out");
  };

  // Handle scroll event to change navbar background
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  // Register and clean up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  return (
    <nav
      className={`navbar fixed-top navbar-expand-lg ${
        navbar ? "active" : ""
      }`}
    >
      <ToastContainer autoClose={800} />
      <div className="container">
        <Link className="navbar-brand" to="/">
          Resérva
        </Link>

        <div className="d-flex justify-content-end flex-grow-1">
          <span>
            <Link to="/" className="btn me-3">
              Home
            </Link>
          </span>
          <span>
            <Link to="/hotels" className="btn me-3">
              Hotels
            </Link>
          </span>

          {/* Show Booking Details only if the user is an admin */}
          {user?.role === "admin" && (
            <NavLink to="/booking-details" className="btn me-3">
              Booking Details
            </NavLink>
          )}
        </div>

        <ul className="navbar-nav ms-auto">
          {user ? (
            <li
              className="nav-item"
              onClick={() => {
                notify();
                setTimeout(() => {
                  localStorage.removeItem("user");
                  window.location.reload();
                }, 800);
              }}
            >
              <a href="##" className="btn nav-link d-flex align-items-center">
                <i className="bx bx-power-off me-1"></i> {user.username}
              </a>
            </li>
          ) : (
            <li className="nav-item">
              <Link className="btn login-btn" to="/signup">
                Sign Up <i className="bx bx-log-in-circle"></i>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
