import React, { useState } from "react";
import "../styles/SportEvent.css";
import "../styles/SportEventAddress.css";
import axios from "axios";
import { useNavigate } from "react-router";

const SportEventAddress = () => {
  const [postalCode, setPostalCode] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const token = localStorage.getItem("token")

  const handleCreateSportEventAddress = (event) => {
    event.preventDefault();

    if (!postalCode || !city || !street || !streetNumber) {
      setError('Wypełnij wszystkie pola');
      return;
    }
    setError('');

    axios({
      method: 'post',
      url: 'http://localhost:8080/api/sportEvent/address/create',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      data: {
        postalCode: postalCode,
        city: city,
        street: street,
        streetNumber: streetNumber
      }
    }).then((response) => {
      const eventAddressId = response.data.eventAddressId;
      navigate('/event', { state: { eventAddressId } })
    }).catch((error) =>{
      console.log(error)
    })
  }

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
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className="btn btn-primary" onClick={handleCreateSportEventAddress}>Potwierdź adres</button>
      </form>
    </div>
  );
};

export default SportEventAddress;