import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="nav-header">
        <Link to="/aboutus" className="nav-link">
          ABOUT US
        </Link>
        <Link to="/foryou" className="nav-link">
          FOR YOU
        </Link>
        <Link to="/services" className="nav-link">
          SERVICES
        </Link>
        <Link to="/blog" className="nav-link">
          BLOG
        </Link>
        <Link to="/vlog" className="nav-link">
          VLOG
        </Link>
        <Link to="/contact" className="nav-link">
          CONTACT
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;