import './App.css';
import { Router, Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import RegisterPage from "./pages/RegisterPage"
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import SportEventPage from './pages/SportEventPage';
import SportEventAddressPage from './pages/SportEventAddressPage';
import SportEventTypePage from './pages/SportEventTypePage';
import SportEventPickedTypePage from './pages/SportEventPickedTypePage';
import ReportPage from './pages/ReportPage';
import SportEventDetailsPage from './pages/SportEventDetailsPage';
import ReportsPage from './pages/ReportsPage';
import UserReportsPage from './pages/UserReportsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signin' element={<LoginPage />} />
          <Route path='/signup' element={<RegisterPage />} />
          <Route path='/eventAddress' element={<SportEventAddressPage/>} />
          <Route path='/event' element={<SportEventPage/>} />
          <Route path='/eventPick' element={<SportEventTypePage/>} />
          <Route path='/eventPicked/:eventType' element={<SportEventPickedTypePage />} />
          <Route path='/reports' element={<ReportPage />}/>
          <Route path='/event/details/:id' element={<SportEventDetailsPage/>}/>
          <Route path='/browseReports' element={<ReportsPage/>} />
          <Route path='/browseOwnReports' element={<UserReportsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;