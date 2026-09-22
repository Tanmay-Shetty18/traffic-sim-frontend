import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SimulationPage from './pages/SimulationPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/simulation/:jobId" element={<SimulationPage />} />
      </Routes>
    </BrowserRouter>
  );
}