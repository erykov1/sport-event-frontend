import React, { useState } from "react";
import "../styles/SportEvent.css"

const SportEvent = () => {
  const [eventName, setEventName] = useState('')
  const [eventTime, setEventTime] = useState('')
  const [registrationDeadline, setRegistrationDeadline] = useState('')
  const [description, setDescription] = useState('')
  const [maxParticipants, setMaxParticipants] = useState(0)
  const [eventType, setEventType] = useState('')

  const handleTextareaChange = (e) => {
    const textarea = e.target;
    const maxTextareaHeight = 200;

    if (textarea.scrollHeight > maxTextareaHeight) {
      textarea.style.overflowY = 'hidden';
      textarea.value = description;
    } else {
      textarea.style.overflowY = 'auto';
      setDescription(textarea.value);
    }
  };

  return (
    <div className="sport-event-container">
      <form id="sport-event-form">
        <div className="mb-3">
          <label htmlFor="eventNameInput" className="form-label">Nazwa wydarzenia</label>
          <input type="text" className="form-control" id="eventNameInput" onChange={(e) => setEventName(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="eventTimeInput" className="form-label">Rozpoczęcie wydarzenia</label>
          <input type="text" className="form-control" id="eventTimeInput" onChange={(e) => setEventTime(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="registrationDeadlineInput" className="form-label">Godzina, do której można zgłaszać udział</label>
          <input type="text" className="form-control" id="registrationDeadlineInput" onChange={(e) => setRegistrationDeadline(e.target.value)}/>
        </div>
        <div class="form-floating">
          <textarea class="form-control" id="floatingTextarea" style={{
              maxHeight: '200px',
              overflowY: 'auto', 
            }}
            onChange={handleTextareaChange}></textarea>
          <label for="floatingTextarea">Opis wydarzenia</label>
        </div>
        <div className="mb-3">
          <label htmlFor="maxParticipantsInput" className="form-label">Maksymalna ilość uczestników</label>
          <input type="text" className="form-control" id="maxParticipantsInput" onChange={(e) => setMaxParticipants(e.target.value)}/>
        </div>
        <select class="form-select" aria-label="Default select example" onChange={(e) => setEventType(e.target.value)}>
          <option selected>Typ wydarzenia</option>
          <option value="1">Siatkówka</option>
          <option value="2">Piłka ręczna</option>
          <option value="3">Piłka nożna</option>
          <option value="4">Tenis ziemny</option>
          <option value="5">Maraton</option>
          <option value="6">Biegi</option>
        </select>
        <button type="submit" className="btn btn-primary" id="btn-sport-event">Utwórz wydarzenie</button>
      </form>
    </div>
  )
}

export default SportEvent;