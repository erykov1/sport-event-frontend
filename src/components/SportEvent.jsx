const SportEvent = () => {
  const [eventName, setEventName] = useState('')
  const [eventTime, setEventTime] = useState('')
  const [registrationDeadline, setRegistrationDeadline] = useState('')
  const [description, setDescription] = useState('')
  const [maxParticipants, setMaxParticipants] = useState(0)
  const [eventType, setEventType] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const sportEventAddress = location.state?.eventAddressId;
  const token = localStorage.getItem("token")

  const formatDateTime = (inputDateTime) => {
    const date = new Date(inputDateTime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    const formattedDateTime = `${year}-${month}-${day} ${hour}:${minute}`;
    return formattedDateTime;
  };

  const handleCreateSportEvent = (event) => {
    event.preventDefault()
    const formattedEventTime = formatDateTime(eventTime);
    const formattedRegistrationDeadline = formatDateTime(registrationDeadline);
    axios({
      method: 'post',
      url: 'http://localhost:8080/api/sportEvent/create',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      data: {
        eventName: eventName,
        eventTime: formattedEventTime,
        registrationDeadline: formattedRegistrationDeadline,
        description: description,
        maxParticipants: maxParticipants,
        sportEventType: eventType,
        sportEventAddress: sportEventAddress
      }
    }).then((response) => {
      navigate('/eventPick')
    }).catch((error) =>{
      console.log(error)
    })
  }

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
          <input type="datetime-local" className="form-control" id="eventTimeInput" onChange={(e) => setEventTime(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="registrationDeadlineInput" className="form-label">Godzina, do której można zgłaszać udział</label>
          <input type="datetime-local" className="form-control" id="registrationDeadlineInput" onChange={(e) => setRegistrationDeadline(e.target.value)}/>
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
          <option value="VOLLEYBALL">Siatkówka</option>
          <option value="HANDBALL">Piłka ręczna</option>
          <option value="FOOTBALL">Piłka nożna</option>
          <option value="TENNIS">Tenis ziemny</option>
          <option value="MARATHON">Maraton</option>
          <option value="RUNNING">Biegi</option>
        </select>
        <button type="submit" className="btn btn-primary" id="btn-sport-event" onClick={handleCreateSportEvent}>Utwórz wydarzenie</button>
      </form>
    </div>
  )
}

export default SportEvent;