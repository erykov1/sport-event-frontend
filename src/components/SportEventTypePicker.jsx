import React from "react";
import { useState } from "react";
import "../styles/SportEventType.css";

const SportEventTypePicker = ({ eventTypeName, eventPhotoLink, onEventPick }) => {
  const handleEventPick = () => {
    onEventPick(eventTypeName);
  };

  return (
    <div className="sport-event-type-picker" onClick={handleEventPick}>
      <img src={eventPhotoLink} alt={eventTypeName} />
      <p>{eventTypeName}</p>
    </div>
  );
};

export default SportEventTypePicker;