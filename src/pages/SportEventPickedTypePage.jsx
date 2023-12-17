import React, {useEffect, useState} from "react";
import "../styles/SportEventsPicked.css";
import SportEventFromType from "../components/SportEventFromType";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router";

const SportEventPickedTypePage = () => {
  const [sportEvents, setSportEvents] = ([])
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [sportEventAddress, setSportEventAddress] = useState(null)
  const navigate = useNavigate()
  const location = useLocation();
  const sportEventType = location.state?.englishEventName;

  useEffect(() => {
    getAllEventsByType()
  }, [])

  const handleEventClick = (eventId) => {
    setSelectedEventId(eventId);
    setSportEventAddress(sportEventAddress)
    navigate(`/event/details/${eventId}`, { state: { selectedEventId, sportEventAddress } })
  };

  const getAllEventsByType = (event) => {
    event.preventDefault()
    axios ({
      method: "get",
      url: `/api/sportEvent/${sportEventType}`
    }).then((response) => {
      setSportEvents(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }
  
  return (
    <div className="sport-event-picked-type-page-container">
      <h1>Wybrane wydarzenia sportowe</h1>
      <div className="sport-event-list">
        {sportEvents.map((event) => (
          <SportEventFromType
            key={event.sportEventId}
            sportEventId={event.sportEventId}
            eventName={event.eventName}
            eventTime={event.eventTime}
            onEventClick={handleEventClick}
            sportEventAddress={event.sportEventAddress}
          />
        ))}
      </div>
    </div>
  )
}

export default SportEventPickedTypePage;