import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css'
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const token = localStorage.getItem("token")
  const decodedToken = token ? jwtDecode(token) : null;
  const userRole = decodedToken ? decodedToken.role : null;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Strona główna</Link>
        </li>
        {!token && (
          <>
            <li>
              <Link to="/signin">Zaloguj się</Link>
            </li>
            <li>
              <Link to="/signup">Załóż konto</Link>
            </li>
          </>
        )}
        {token && (
          <>
            {userRole === 'ADMIN' && (
              <li>
                <Link to="/eventAddress">Dodaj wydarzenie</Link>
              </li>
            )}
            <li>
              <Link to="/eventPick">Typy wydarzeń</Link>
            </li>
            <li>
              <Link to="/reports">Zgłoszenia</Link>
            </li>
            <li>
              <Link to="/" onClick={() => localStorage.removeItem("token")}>Wyloguj się</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar