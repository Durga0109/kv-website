import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";
import useNavbarScrollEffect from "../Hooks/NavbarScrollEffect.js"; // Assuming the hook is in hooks folder

function Navbar() {
  const navbarRef = useRef(null); // Create a ref for the navbar

  useNavbarScrollEffect(navbarRef); // Apply the scroll effect hook

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-brand">
        <h1>Mythili Coirs</h1>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
