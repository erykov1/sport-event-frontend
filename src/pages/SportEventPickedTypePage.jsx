import React, {useEffect, useState} from "react";
import "../styles/SportEventsPicked.css";
import SportEventFromType from "../components/SportEventFromType";
import { useNavigate} from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router";

const SportEventPickedTypePage = () => {
  const [sportEvents, setSportEvents] = useState([]);
  const [selectedEventId, setSelectedEventId] = useState(null);
  const [sportEventAddress, setSportEventAddress] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate('/signin');
    } else {
      getAllEventsByType();
    }
  }, []);

  const handleEventClick = (eventId, eventAddress) => {
    setSelectedEventId(eventId);
    setSportEventAddress(eventAddress);
    console.log("wybrane id", selectedEventId);
    console.log("wybrany adres", sportEventAddress);
    navigate(`/event/details/${eventId}`, { state: { selectedEventId: eventId, sportEventAddress: eventAddress } });
  };

  const getAllEventsByType = () => {
    const sportEventType = location.state?.englishEventName;
    axios({
      method: "get",
      url: `http://localhost:8080/api/sportEvent/${sportEventType}`,
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    }).then((response) => {
      setSportEvents(response.data);
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="sport-event-picked-type-page-container">
      <h1>Wybrane wydarzenia sportowe</h1>
      <div className="sport-event-list">
        {sportEvents && sportEvents.map((event) => (
          <SportEventFromType
            key={event.sportEventId}
            sportEventId={event.sportEventId}
            eventName={event.eventName}
            eventTime={event.eventTime}
            onEventClick={() => handleEventClick(event.sportEventId, event.sportEventAddress)}
            sportEventAddress={event.sportEventAddress}
          />
        ))}
      </div>
    </div>
  );
};

export default SportEventPickedTypePage;