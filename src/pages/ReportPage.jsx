import React from "react";
import "../styles/Report.css"
import { Link } from "react-router-dom";

const ReportPage = () => {

  return (
    <div className="report-page-container">
      <Link to="/browse-reports" className="report-section">
        <h2>Przeglądaj swoje zgłoszenia</h2>
        <img src="https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Przeglądaj zgłoszenia" />
      </Link>

      <Link to="/create-report" className="report-section">
        <h2>Utwórz zgłoszenie</h2>
        <img src="https://images.unsplash.com/photo-1474546652694-a33dd8161d66?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Utwórz zgłoszenie" />
      </Link>
    </div>
  );
}

export default ReportPage