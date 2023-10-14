import "./navbar.css";

import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h3>Inventory Management</h3>

      <div className="navbar-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/sale">Sale</NavLink>
        <NavLink to="/inventory">Inventory</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
