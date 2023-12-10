import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Strona główna</Link>
        </li>
        <li>
          <Link to="/signin">Zaloguj się</Link>
        </li>
        <li>
          <Link to="/signup">Załóż konto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar