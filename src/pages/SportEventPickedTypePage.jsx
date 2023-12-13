import React, {useState} from "react";
import "../styles/SportEventsPicked.css";
import SportEventFromType from "../components/SportEventFromType";
import { useNavigate } from "react-router-dom";

const SportEventPickedTypePage = () => {
  const [sportEvents, setSportEvents] = ([])
  const [selectedEventId, setSelectedEventId] = useState(null);
  const navigate = useNavigate()

  const sportEventsData = [
    { sportEventId: 1, eventName: 'Event 1', eventTime: '2023-12-31T18:00:00' },
    { sportEventId: 2, eventName: 'Event 2', eventTime: '2023-12-31T19:00:00' },
    { sportEventId: 3, eventName: 'Event 3', eventTime: '2023-12-31T20:00:00' },
  ];

  const handleEventClick = (eventId) => {
    setSelectedEventId(eventId);
    navigate(`/event/details/${eventId}`)
  };
  
  return (
    <div className="sport-event-picked-type-page-container">
      <h1>Wybrane wydarzenia sportowe</h1>
      <div className="sport-event-list">
        {sportEventsData.map((event) => (
          <SportEventFromType
            key={event.sportEventId}
            sportEventId={event.sportEventId}
            eventName={event.eventName}
            eventTime={event.eventTime}
            onEventClick={handleEventClick}
          />
        ))}
      </div>
    </div>
  )
}

export default SportEventPickedTypePage;