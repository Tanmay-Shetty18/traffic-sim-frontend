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
      <h1>Traffic-Sim: Select an Area</h1>
      <AreaSelectMap onAreaSelected={setBounds} />
      <button disabled={!bounds} onClick={handleStart}>
        Start Simulation
      </button>
    </div>
  );
}
