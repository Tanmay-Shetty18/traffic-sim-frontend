import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AreaSelectMap from '../components/AreaSelectMap';
import { startSimulation } from '../api/clients';

export default function HomePage() {
  const [bounds, setBounds] = useState(null);
  const navigate = useNavigate();

  const handleStart = async () => {
    const { data } = await startSimulation(bounds);
    navigate(`/simulation/${data.jobId}`);
  };

  return (
    <div>
      <header className="app-header">
        <div className="app-header__brand">
          <span className="app-header__dot" />
          <span className="app-header__title">Traffic-Sim</span>
        </div>
        <span className="app-header__tagline">India-calibrated road network simulation</span>
      </header>

      <div className="map-shell">
        <div className="map-card">
          <AreaSelectMap onAreaSelected={setBounds} />
        </div>

        {!bounds && (
          <p style={{ color: 'var(--text-muted)', fontSize: 14, marginTop: 12 }}>
            Draw a rectangle or polygon on the map to select your simulation area.
          </p>
        )}

        <button className="start-btn" disabled={!bounds} onClick={handleStart}>
          Start Simulation
        </button>
      </div>
    </div>
  );
}