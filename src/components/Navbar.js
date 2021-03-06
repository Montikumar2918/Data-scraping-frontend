import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <h2 className="navbar-brand">Data Scriping</h2>
          <div className="ml-auto links">
            <Link className="links" to="/">
              Home
            </Link>
            <Link className="links" to="/products">
              Mobiles
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
