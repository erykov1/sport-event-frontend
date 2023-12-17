import React, {useState} from "react";
import SportEventTypePicker from "../components/SportEventTypePicker";
import "../styles/SportEventType.css";
import { useNavigate } from "react-router-dom";

const SportEventTypePage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate()

  const handleEventPick = (eventTypeName) => {
    const englishEventName = eventNamesMap[eventTypeName];
    setSelectedEvent(englishEventName);
    navigate(`/eventPick/${englishEventName}`, {state: englishEventName});
  };

  const eventNamesMap = {
    'Siatkówka': 'VOLLEYBALL',
    'Piłka ręczna': 'HANDBALL',
    'Piłka nożna': 'FOOTBALL',
    'Tenis ziemny': 'TENNIS',
    'Maraton': 'MARATHON',
    'Biegi': 'RUNNING',
  };

  const sportEventTypes = [
    { name: 'Siatkówka', photoLink: 'https://images.pexels.com/photos/6203521/pexels-photo-6203521.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Piłka ręczna', photoLink: 'https://images.unsplash.com/photo-1553627220-92f0446b6a5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Piłka nożna', photoLink: 'https://images.pexels.com/photos/1171084/pexels-photo-1171084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Tenis ziemny', photoLink: 'https://images.pexels.com/photos/5739161/pexels-photo-5739161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Maraton', photoLink: 'https://images.pexels.com/photos/2654902/pexels-photo-2654902.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { name: 'Biegi', photoLink: 'https://images.pexels.com/photos/3760259/pexels-photo-3760259.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ];

  return (
    <div className="sport-event-type-page-container">
      <h1>Wybierz kategorię sportową</h1>
      <div className="sport-event-types-container">
        {sportEventTypes.map((event, index) => (
          <SportEventTypePicker
            key={index}
            eventTypeName={event.name}
            eventPhotoLink={event.photoLink}
            onEventPick={handleEventPick}
          />
        ))}
      </div>
      {selectedEvent && (
        <p>Wybrana kategoria sportowa: {selectedEvent}</p>
      )}
    </div>
  );
};

export default SportEventTypePage;