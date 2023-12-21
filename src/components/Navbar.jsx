import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Navbar.css'
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
  const [role, setRole] = useState("")
  const token = localStorage.getItem("token")
  let decodedToken = token ? jwtDecode(token) : null;
  let userRole = decodedToken ? decodedToken.role : null;
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      setRole(decodedToken.role);
    }
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/');
  };

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
              <Link to="/" onClick={handleLogout}>Wyloguj się</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar