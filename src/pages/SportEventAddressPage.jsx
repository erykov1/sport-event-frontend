import { useEffect } from "react";
import React from "react";
import SportEventAddress from "../components/SportEventAddress";
import '../styles/SportEventAddress.css';
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const SportEventAddressPage = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const decodedToken = token ? jwtDecode(token) : null;
  const userRole = decodedToken ? decodedToken.role : null;

  useEffect(() => {
    if (userRole !== 'ADMIN') {
      navigate('/signin');
    }
  }, [navigate]);

  return (
    <div className="sport-event-address-page-container">
      <SportEventAddress />
    </div>
  )
}

export default SportEventAddressPage;