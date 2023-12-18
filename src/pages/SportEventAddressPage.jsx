import { useEffect } from "react";
import React from "react";
import SportEventAddress from "../components/SportEventAddress";
import '../styles/SportEventAddress.css';
import { useNavigate } from "react-router-dom";

const SportEventAddressPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem("token")) {
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