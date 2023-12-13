import './App.css';
import { Router, Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import RegisterPage from "./pages/RegisterPage"
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import SportEventPage from './pages/SportEventPage';
import SportEventAddressPage from './pages/SportEventAddressPage';
import SportEventTypePage from './pages/SportEventTypePage';
import SportEventPickedTypePage from './pages/SportEventPickedTypePage';
import ReportPage from './pages/ReportPage';

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
          <Route path='/eventPick/:id' element={<SportEventPickedTypePage />} />
          <Route path='/reports' element={<ReportPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;