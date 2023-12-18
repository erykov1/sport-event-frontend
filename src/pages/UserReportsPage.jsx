import React, {useState, useEffect} from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import UserReportForm from "../components/UserReportForm";
import "../styles/UserReport.css"

const UserReportsPage = () => {
  const [userReports, setUserReports] = useState([])
  const [filteredReports, setFilteredReports] = useState([]);

  useEffect(() => {
    getAllUserReports()
  }, [])

  const getAllUserReports = () => {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const username = decodedToken.sub;
    axios({
      method: "get",
      url: `http://localhost:8080/api/report/all/${username}`,
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    }).then((response) => {
      const reportsArray = Array.isArray(response.data) ? response.data : [response.data];
      setUserReports(reportsArray);
    }).catch((error) => {
      console.log(error);
    });
  }

  const filterReportsByStatus = (status) => {
    const filtered = userReports.filter((report) => report.reportStatus === status);
    setFilteredReports(filtered);
  };

  return (
    <div className="user-reports-page-container">
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
        <UserReportForm
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

export default UserReportsPage