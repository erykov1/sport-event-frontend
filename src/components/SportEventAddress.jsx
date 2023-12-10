import React, { useState } from "react";
import "../styles/SportEvent.css";
import "../styles/SportEventAddress.css";

const SportEventAddress = () => {
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [streetNumber, setStreetNumber] = useState('');

  return (
    <div className="sport-event-address-container">
      <form>
        <div className="mb-3 inline">
          <label htmlFor="postalCodeInput" className="form-label">Kod pocztowy</label>
          <input type="text" className="form-control" id="postalCodeInput" onChange={(e) => setPostalCode(e.target.value)}/>
        </div>
        <div className="mb-3 inline">
          <label htmlFor="cityInput" className="form-label">Miejscowość</label>
          <input type="text" className="form-control" id="cityInput" onChange={(e) => setCity(e.target.value)}/>
        </div>
        <div className="mb-3 inline-street">
          <label htmlFor="streetInput" className="form-label">Ulica</label>
          <input type="text" className="form-control" id="streetInput" onChange={(e) => setStreet(e.target.value)}/>
        </div>
        <div className="mb-3 inline-street">
          <label htmlFor="streetNumberInput" className="form-label">Numer ulicy</label>
          <input type="text" className="form-control" id="streetNumberInput" onChange={(e) => setStreetNumber(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Potwierdź adres</button>
      </form>
    </div>
  );
};

export default SportEventAddress;