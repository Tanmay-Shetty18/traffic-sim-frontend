import { useState } from 'react';
import { useParams } from 'react-router-dom';
import JobStatus from '../components/JobStatus';
import PlaybackMap from '../components/PlaybackMap';
import StatsDashboard from '../components/StatsDashboard';
import ReportButton from '../components/ReportButton';

export default function SimulationPage() {
  const { jobId } = useParams();
  const [result, setResult] = useState(null);

  if (!result) {
    return <JobStatus jobId={jobId} onComplete={setResult} />;
  }

  return (
    <div>
      <PlaybackMap trips={result.trips} />
      <StatsDashboard
        speedOverTime={result.speedOverTime}
        vehicleMix={result.vehicleMix}
        validation={result.validation}
      />
      <ReportButton jobId={jobId} />
    </div>
  );
}