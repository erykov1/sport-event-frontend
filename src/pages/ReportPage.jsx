import React, {useEffect, useState} from "react";
import "../styles/Report.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ReportPage = () => {
  const [role, setRole] = useState("")
  const navigate = useNavigate()
  const token = localStorage.getItem("token");
  const decodedToken = token ? jwtDecode(token) : null;

  useEffect(() => {
    if (!token || !decodedToken) {
      navigate('/signin');
    } else {
      setRole(decodedToken.role)
    }
  }, [token, decodedToken, navigate]);

  return (
    <div className="report-page-container">
      <Link to="/browseOwnReports" className="report-section">
        <h2>Przeglądaj swoje zgłoszenia</h2>
        <img src="https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Przeglądaj zgłoszenia" />
      </Link>

      {role && role.includes("ADMIN") && (
        <Link to="/browseReports" className="report-section">
          <h2>Przeglądaj zgłoszenia</h2>
          <img src="https://images.unsplash.com/photo-1474546652694-a33dd8161d66?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Utwórz zgłoszenie" />
        </Link>
      )}
    </div>
  );
}

export default ReportPage