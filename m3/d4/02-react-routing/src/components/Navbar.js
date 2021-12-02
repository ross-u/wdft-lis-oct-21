// src/components/Navbar.js

import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        {/* <Link to="/">Home</Link> */}
        {/* <Link to="/about">About</Link> */}
        {/* <Link to="/projects">Projects</Link> */}

        <NavLink to="/" className={ ({ isActive }) => "nav-link" + (isActive ? " selected" : "")} >Home</NavLink>
        <NavLink to="/about" className={ ({ isActive }) => "nav-link" + (isActive ? " selected" : "")}>About</NavLink>
        <NavLink to="/projects" className={ ({ isActive }) => "nav-link" + (isActive ? " selected" : "")}>Projects</NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
