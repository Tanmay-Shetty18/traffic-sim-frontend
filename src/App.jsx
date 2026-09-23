import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import SimulationPage from './pages/SimulationPage';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/select" element={<HomePage />} />
        <Route path="/simulation/:jobId" element={<SimulationPage />} />
      </Routes>
    </BrowserRouter>
  );
}