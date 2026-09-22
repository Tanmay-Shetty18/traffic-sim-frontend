import { useEffect, useState } from 'react';
import { getJobStatus } from '../api/clients';

const STAGES = [
  'Fetching OSM data',
  'Cleaning geometry',
  'Converting network (netconvert)',
  'Running behavior-engine simulation',
  'Done',
];

export default function JobStatus({ jobId, onComplete }) {
  const [stageIndex, setStageIndex] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!jobId) return;
    const interval = setInterval(async () => {
      try {
        const { data } = await getJobStatus(jobId);
        setStageIndex(data.stageIndex);
        if (data.status === 'complete') {
          clearInterval(interval);
          onComplete(data);
        }
      } catch (err) {
        setError('Could not reach backend');
        clearInterval(interval);
      }
    }, 2000); // poll every 2 seconds
    return () => clearInterval(interval);
  }, [jobId]);

  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <ol>
      {STAGES.map((s, i) => (
        <li key={s} style={{ fontWeight: i === stageIndex ? 'bold' : 'normal' }}>
          {i < stageIndex ? '✅' : i === stageIndex ? '⏳' : '⬜'} {s}
        </li>
      ))}
    </ol>
  );
}