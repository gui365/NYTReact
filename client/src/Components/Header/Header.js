import React from "react";
import { Link } from "react-router-dom"
import "../../App.css";

const Header = () => (
  <nav className="navbar navbar-expand-lg d-flex justify-content-between">
    <div>
      <a href="/">
        New York Times Article Scrubber
      </a>
    </div>
    
    <div className="d-flex flex-row">
      <span className="header-option">
        <Link to="/">Home</Link>
      </span>
      <span className="header-option">
        <Link to="/saved">Saved</Link>
      </span>
    </div>
  </nav>
)

export default Header;
