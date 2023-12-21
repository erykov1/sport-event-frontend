import React from "react";
import "../styles/SportEventDetails.css";

const SportEventAddressDetails = ({eventAddressId, postalCode, city, street, streetNumber}) => {

  return (
    <div className="sport-event-address-details-container">
      <h2>Szczegóły adresu wydarzenia</h2>
      <p><strong>Kod pocztowy:</strong> {postalCode}</p>
      <p><strong>Miejscowość:</strong> {city}</p>
      <p><strong>Ulica:</strong> {street}</p>
      <p><strong>Numer ulicy:</strong> {streetNumber}</p>
    </div>
  );
}

export default SportEventAddressDetails;