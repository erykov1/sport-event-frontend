import React, {useEffect} from "react";
import SportEvent from "../components/SportEvent";
import '../styles/SportEvent.css';
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const SportEventPage = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const decodedToken = jwtDecode(token)
  const userRole = decodedToken ? decodedToken.role : null

  useEffect(() => {
    if (userRole !== 'ADMIN') {
      navigate('/signin');
    }
  }, [navigate]);

  return (
    <div className="sport-event-page-container">
      <SportEvent />
    </div>
  )
}

export default SportEventPage;