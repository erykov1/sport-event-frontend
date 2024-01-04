import React from "react";
import "../styles/Reports.css"
import axios from "axios";

const ReportForm = ({reportId, username, reportStatus, reportedAt, sportEventId}) => {
  const formattedReportedAt = new Date(reportedAt).toLocaleString();
  const token = localStorage.getItem("token")
  const isPending = reportStatus === 'PENDING';

  const handleReject = () => {
    axios({
      method: 'patch',
      url: `http://localhost:8080/api/report/decline/${reportId}`,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    }).then((response) => {

    }).catch((error) => {
      console.log(error);
    });
  };

  const handleAccept = () => {
    axios({
      method: 'patch',
      url: `http://localhost:8080/api/report/accept/${reportId}`,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    }).then((response) => {

    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="report-form-container">
      <p>Użytkownik: {username}</p>
      <p>Zgłoszony o: {formattedReportedAt}</p>

      {isPending && (
        <div className="action-buttons-container">
          <button className="btn btn-success" onClick={handleAccept}>
            Akceptuj zgłoszenie
          </button>
          <button className="btn btn-danger" onClick={handleReject}>
            Odrzuć zgłoszenie
          </button>
        </div>
      )}
    </div>
  );
}

export default ReportForm;