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
        <li>
          <Link to="/eventAddress">Dodaj wydarzenie</Link>
        </li>
        <li>
          <Link to="/eventPick">Typy wydarzeń</Link>
        </li>
        <li>
          <Link to="/reports">Zgłoszenia</Link>
        </li>
        <li>
          <Link to="/" onClick={() => localStorage.removeItem("token")}>Wyloguj się</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar