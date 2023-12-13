import React from "react";
import "../styles/SportEventDetails.css";

const SportEventAddressDetails = ({eventAddressId, postalCode, city, street, streetNumber}) => {

  return (
    <div className="sport-event-address-details-container">
      <h2>Event Address Details</h2>
      <p><strong>Postal Code:</strong> {postalCode}</p>
      <p><strong>City:</strong> {city}</p>
      <p><strong>Street:</strong> {street}</p>
      <p><strong>Street Number:</strong> {streetNumber}</p>
    </div>
  );
}

export default SportEventAddressDetails;