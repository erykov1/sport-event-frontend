import React from "react";
import "../styles/SportEventDetails.css"

const SportEventDetails = ({sportEventId, sportEventName, eventTime, registrationDeadline, description, maxParticipants}) => {
  
  return (
    <div className="sport-event-details-container">
      <h2>Szczegóły wydarzenia</h2>
      <p><strong>Nazwa:</strong> {sportEventName}</p>
      <p><strong>Czas wydarzenia:</strong> {new Date(eventTime).toLocaleString()}</p>
      <p><strong>Do kiedy można zgłosić chęć uczestnictwa:</strong> {new Date(registrationDeadline).toLocaleString()}</p>
      <p><strong>Opis:</strong> {description}</p>
      <p><strong>Maksymalna liczba chętnych:</strong> {maxParticipants}</p>
    </div>
  );
}

export default SportEventDetails;