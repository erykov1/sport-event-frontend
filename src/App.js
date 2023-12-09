import './App.css';
import { Router, Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import RegisterPage from "./pages/RegisterPage"
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signin' element={<LoginPage />} />
          <Route path='/signup' element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;