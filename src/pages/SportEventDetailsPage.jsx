import React from "react";
import "../styles/SportEventDetails.css";
import SportEventAddressDetails from "../components/SportEventAddressDetails";
import SportEventDetails from "../components/SportEventDetails";

const SportEventDetailsPage = () => {

  return (
    <div className="sport-event-details-page-container">
      <SportEventDetails
        sportEventId={1}
        sportEventName="Sample Event"
        eventTime="2023-12-31T18:00:00"
        registrationDeadline="2023-12-30T23:59:59"
        description="This is a sample event description."
        maxParticipants={50}
      />
      <SportEventAddressDetails
        eventAddressId={1}
        postalCode="12345"
        city="Sample City"
        street="Sample Street"
        streetNumber="42"
      />
    </div>
  )
}

export default SportEventDetailsPage;