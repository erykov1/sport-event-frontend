import React, {useEffect, useState} from "react";
import "../styles/SportEventDetails.css";
import SportEventAddressDetails from "../components/SportEventAddressDetails";
import SportEventDetails from "../components/SportEventDetails";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const SportEventDetailsPage = () => {
  const [sportEvent, setSportEvent] = useState();
  const [sportEventAddress, setSportEventAddress] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate('/signin');
    } else {
      getSportEvent();
      getSportEventAddress();
    }
  }, []);

  const getSportEvent = () => {
    const sportEventId = location.state?.selectedEventId
    axios({
      method: "get",
      url: `http://localhost:8080/api/sportEvent/details/${sportEventId}`,
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    }).then((response) => {
      setSportEvent(response.data);
    }).catch((error) => {
      console.log(error);
    });
  };

  const getSportEventAddress = () => {
    const sportEventAddressId = location.state?.sportEventAddress
    axios({
      method: "get",
      url: `http://localhost:8080/api/sportEvent/address/details/${sportEventAddressId}`,
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    }).then((response) => {
      setSportEventAddress(response.data);
    }).catch((error) => {
      console.log(error);
    });
  };

  const handleCreateReport = (event) => {
    event.preventDefault()
    const sportEventId = location.state?.selectedEventId
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const username = decodedToken.sub;
    axios({
      method: 'post',
      url: 'http://localhost:8080/api/report/create',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      data: {
        username: username,
        sportEventId: sportEventId
      }
    }).then((response) => {
      navigate('/')
    }).catch((error) =>{
      console.log(error)
    })
  }

  return (
    <div className="sport-event-details-page-container">
      {sportEvent && (
        <SportEventDetails
          sportEventId={sportEvent.sportEventId}
          sportEventName={sportEvent.eventName}
          eventTime={sportEvent.eventTime}
          registrationDeadline={sportEvent.registrationDeadline}
          description={sportEvent.description}
          maxParticipants={sportEvent.maxParticipants}
        />
      )}
      {sportEventAddress && (
        <SportEventAddressDetails
          eventAddressId={sportEventAddress.eventAddressId}
          postalCode={sportEventAddress.postalCode}
          city={sportEventAddress.city}
          street={sportEventAddress.street}
          streetNumber={sportEventAddress.streetNumber}
        />
      )}
      <button type="submit" className="btn btn-primary" onClick={handleCreateReport}>
        Zgłoś uczestnictwo
      </button>
    </div>
  );
};

export default SportEventDetailsPage;import React, {useEffect, useState} from "react";
import "../styles/SportEventDetails.css";
import SportEventAddressDetails from "../components/SportEventAddressDetails";
import SportEventDetails from "../components/SportEventDetails";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const SportEventDetailsPage = () => {
  const [sportEvent, setSportEvent] = useState();
  const [sportEventAddress, setSportEventAddress] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate('/signin');
    } else {
      getSportEvent();
      getSportEventAddress();
    }
  }, []);

  const getSportEvent = () => {
    const sportEventId = location.state?.selectedEventId
    axios({
      method: "get",
      url: `http://localhost:8080/api/sportEvent/details/${sportEventId}`,
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    }).then((response) => {
      setSportEvent(response.data);
    }).catch((error) => {
      console.log(error);
    });
  };

  const getSportEventAddress = () => {
    const sportEventAddressId = location.state?.sportEventAddress
    axios({
      method: "get",
      url: `http://localhost:8080/api/sportEvent/address/details/${sportEventAddressId}`,
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    }).then((response) => {
      setSportEventAddress(response.data);
    }).catch((error) => {
      console.log(error);
    });
  };

  const handleCreateReport = (event) => {
    event.preventDefault()
    const sportEventId = location.state?.selectedEventId
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const username = decodedToken.sub;
    axios({
      method: 'post',
      url: 'http://localhost:8080/api/report/create',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      data: {
        username: username,
        sportEventId: sportEventId
      }
    }).then((response) => {
      navigate('/')
    }).catch((error) =>{
      console.log(error)
    })
  }

  return (
    <div className="sport-event-details-page-container">
      {sportEvent && (
        <SportEventDetails
          sportEventId={sportEvent.sportEventId}
          sportEventName={sportEvent.eventName}
          eventTime={sportEvent.eventTime}
          registrationDeadline={sportEvent.registrationDeadline}
          description={sportEvent.description}
          maxParticipants={sportEvent.maxParticipants}
        />
      )}
      {sportEventAddress && (
        <SportEventAddressDetails
          eventAddressId={sportEventAddress.eventAddressId}
          postalCode={sportEventAddress.postalCode}
          city={sportEventAddress.city}
          street={sportEventAddress.street}
          streetNumber={sportEventAddress.streetNumber}
        />
      )}
      <button type="submit" className="btn btn-primary" onClick={handleCreateReport}>
        Zgłoś uczestnictwo
      </button>
    </div>
  );
};

export default SportEventDetailsPage;