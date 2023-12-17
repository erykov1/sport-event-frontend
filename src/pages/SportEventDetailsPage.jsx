import React, {useEffect, useState} from "react";
import "../styles/SportEventDetails.css";
import SportEventAddressDetails from "../components/SportEventAddressDetails";
import SportEventDetails from "../components/SportEventDetails";
import axios from "axios";
import { useParams } from "react-router";

const SportEventDetailsPage = () => {
  const [sportEvent, setSportEvent] = useState()
  const [sportEventAddress, setSportEventAddress] = useState()
  const sportEventId = useParams()
  const sportEventAddressId = useParams()

  useEffect(() => {
    getSportEvent()
    getSportEventAddress()
  })

  const getSportEvent = (event) => {
    event.preventDefault()
    axios ({
      method: "get",
      url: `/api/sportEvent/details/${sportEventId}`
    }).then((response) => {
      setSportEvent(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  const getSportEventAddress = (event) => {
    event.preventDefault()
    axios ({
      method: "get",
      url: `api/sportEvent/address/details/${sportEventAddressId}`
    }).then((response) => {
      setSportEventAddress(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="sport-event-details-page-container">
      <SportEventDetails
        sportEventId={sportEvent.sportEventId}
        sportEventName={sportEvent.sportEventName}
        eventTime={sportEvent.sportEventTime}
        registrationDeadline={sportEvent.registrationDeadline}
        description={sportEvent.description}
        maxParticipants={sportEvent.maxParticipants}
      />
      <SportEventAddressDetails
        eventAddressId={sportEventAddress.eventAddressId}
        postalCode={sportEventAddress.postalCode}
        city={sportEventAddress.city}
        street={sportEventAddress.street}
        streetNumber={sportEventAddress.streetNumber}
      />
    </div>
  )
}

export default SportEventDetailsPage;