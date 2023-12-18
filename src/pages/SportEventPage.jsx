import React, {useEffect} from "react";
import SportEvent from "../components/SportEvent";
import '../styles/SportEvent.css';
import { useNavigate } from "react-router-dom";

const SportEventPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem("token")) {
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