import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="nav-header">
        <Link to="Tour-Place-Project/aboutus" className="nav-link">
          ABOUT US
        </Link>
        <Link to="Tour-Place-Project/foryou" className="nav-link">
          FOR YOU
        </Link>
        <Link to="Tour-Place-Project/services" className="nav-link">
          SERVICES
        </Link>
        <Link to="Tour-Place-Project/blog" className="nav-link">
          BLOG
        </Link>
        <Link to="Tour-Place-Project/vlog" className="nav-link">
          VLOG
        </Link>
        <Link to="Tour-Place-Project/contact" className="nav-link">
          CONTACT
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;