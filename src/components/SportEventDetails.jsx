import React from "react";
import "../styles/SportEventDetails.css"

const SportEventDetails = ({sportEventId, sportEventName, eventTime, registrationDeadline, description, maxParticipants}) => {
  
  return (
    <div className="sport-event-details-container">
      <h2>Sport Event Details</h2>
      <p><strong>Event Name:</strong> {sportEventName}</p>
      <p><strong>Event Time:</strong> {eventTime}</p>
      <p><strong>Registration Deadline:</strong> {registrationDeadline}</p>
      <p><strong>Description:</strong> {description}</p>
      <p><strong>Max Participants:</strong> {maxParticipants}</p>
    </div>
  );
}

export default SportEventDetails;