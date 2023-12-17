import React from "react";
import "../styles/SportEventsPicked.css";

const SportEventFromType = ({ sportEventId, eventName, eventTime, onEventClick, sportEventAddress }) => {
  const handleEventClick = () => {
    onEventClick(sportEventId);
  };

  return (
    <div className="sport-event-from-type-container" onClick={handleEventClick}>
      <h3>{eventName}</h3>
      <p>Czas rozpoczęcia: {eventTime}</p>
    </div>
  );
};


export default SportEventFromType;