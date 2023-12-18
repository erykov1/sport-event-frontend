import React, {useState, useEffect} from "react";
import axios from "axios";
import "../styles/Reports.css"
import ReportForm from "../components/ReportForm";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ReportsPage = () => {
  const [reports, setReports] = useState([]);
  const token = localStorage.getItem("token");
  const [filteredReports, setFilteredReports] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/signin');
    } else {
      const decodedToken = jwtDecode(token);
      const userRole = decodedToken ? decodedToken.role : null;
      if (userRole !== 'ADMIN') {
        navigate('/');
      } else {
        getAllReports();
      }
    }
  }, [token, navigate]);

  const getAllReports = () => {
    axios({
      method: "get",
      url: `http://localhost:8080/api/report/all`,
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    }).then((response) => {
      const reportsArray = Array.isArray(response.data) ? response.data : [response.data];
      setReports(reportsArray);
    }).catch((error) => {
      console.log(error);
    });
  }

  const filterReportsByStatus = (status) => {
    const filtered = reports.filter((report) => report.reportStatus === status);
    setFilteredReports(filtered);
  };

  return (
    <div className="reports-page-container">
      <h1>Lista zgłoszeń</h1>
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-secondary" onClick={() => filterReportsByStatus('PENDING')}>
          Oczekujące
        </button>
        <button type="button" className="btn btn-secondary" onClick={() => filterReportsByStatus('ACCEPTED')}>
          Zaakceptowane
        </button>
        <button type="button" className="btn btn-secondary" onClick={() => filterReportsByStatus('DECLINED')}>
          Odrzucone
        </button>
      </div>
      {filteredReports.map((report) => (
        <ReportForm
          key={report.reportId}
          reportId={report.reportId}
          username={report.username}
          reportStatus={report.reportStatus}
          reportedAt={report.reportedAt}
          sportEventId={report.sportEventId}
        />
      ))}
    </div>
  );
}

export default ReportsPage;