import { useState } from 'react';
import { useParams } from 'react-router-dom';
import JobStatus from '../components/JobStatus';
import PlaybackMap from '../components/PlaybackMap';
import StatsDashboard from '../components/StatsDashboard';
import ReportButton from '../components/ReportButton';
import { mockSimulationResult } from '../mockTrips';

export default function SimulationPage() {
  const { jobId } = useParams();
  const isDemo = jobId === 'demo';
  const [result, setResult] = useState(isDemo ? mockSimulationResult : null);

  if (!result) {
    return <JobStatus jobId={jobId} onComplete={setResult} />;
  }

  return (
    <div>
      {isDemo && (
        <div className="demo-banner">Demo mode — showing sample simulation data</div>
      )}
      <PlaybackMap trips={result.trips} />
      <StatsDashboard
        speedOverTime={result.speedOverTime}
        vehicleMix={result.vehicleMix}
        validation={result.validation}
      />
      {isDemo ? (
        <p style={{ padding: '0 10px', color: 'var(--text-muted)', fontSize: 13 }}>
          Report download is available once a real simulation has run.
        </p>
      ) : (
        <ReportButton jobId={jobId} />
      )}
    </div>
  );
}