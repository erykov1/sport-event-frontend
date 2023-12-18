import React, { useState } from "react";
import "../styles/UserReport.css"
import axios from "axios";

const UserReportForm = ({reportId, username, reportStatus, reportedAt, sportEventId}) => {
  const formattedReportedAt = new Date(reportedAt).toLocaleString();
  const token = localStorage.getItem("token")
  const isPending = reportStatus === 'PENDING';

  const handleDelete = () => {
    axios({
      method: 'delete',
      url: `http://localhost:8080/api/report/delete/${reportId}`,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    }).then((response) => {

    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="user-report-form-container">
      <p>Użytkownik: {username}</p>
      <p>Zgłoszony o: {formattedReportedAt}</p>

      {isPending && (
      <div className="user-action-buttons-container">
        <button className="btn btn-danger" onClick={handleDelete}>
          Usuń zgłoszenie
        </button>
      </div> )}
    </div>
  )
}

export default UserReportForm